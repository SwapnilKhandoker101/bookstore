import { Torder } from "./order.interface";
import { Order } from "../order.model";
import { Product } from "../product.model";
import { Types } from "mongoose";

const createOrder = async (orderData: Torder) => {
  const { email, product, quantity } = orderData;
  const id = new Types.ObjectId(product);

  const item = await Product.findById(id);

  if (!item) {
    throw new Error("Product not found");
  }
  if (item.quantity < quantity) {
    throw new Error("Insufficient stock");
  }
  const totalPrice = item.price * quantity;

  const result = await Order.create({
    email,
    product: product,
    quantity,
    totalPrice,
  });
  item.quantity -= quantity;
  item.inStock = item.quantity > 0;
  await item.save();

  return result;
};

const getRevenueFromOrders = async () => {
  const result = await Order.aggregate([
    {
      $addFields: {
        productId: {
          $toObjectId: "$product",
        },
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    {
      $unwind: "$productDetails",
    },
    {
      $project: {
        totalRevenue: { $multiply: ["$quantity", "$productDetails.price"] },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalRevenue" },
      },
    },
  ]);

  return result[0]?.totalRevenue || 0;
};

export const OrderServices = {
  createOrder,
  getRevenueFromOrders,
};
