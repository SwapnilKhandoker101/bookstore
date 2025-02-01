import { Product } from "../product.model";
import { TProduct } from "./product.interface";
import { Types } from "mongoose";

const createProductIntoDB = async (productData: TProduct) => {
  if (
    productData._id &&
    (await Product.isinStock(productData._id.toString()))
  ) {
    throw new Error("Product already exists");
  }
  const result = await Product.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSpecificProductFromDB = async (id: string) => {
  const result = await Product.findOne({ id });
  return result;
};
const updateProductFromDB = async (
  id: string,
  price: number,
  quantity: number
) => {
  const result = await Product.findByIdAndUpdate(
    {
      _id: new Types.ObjectId(id),
    },
    {
      $set: {
        price: price,
        quantity: quantity,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};
const deleteProductFromDB = async (id: string) => {
  // const _id=new Types.ObjectId(id)
  const result = await Product.updateOne(
    {
      _id: new Types.ObjectId(id),
    },
    {
      $set: {
        inStock: false,
      },
    }
  );
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSpecificProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
