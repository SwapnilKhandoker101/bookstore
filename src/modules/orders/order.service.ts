import { ObjectId } from "mongoose";
import { Torder } from "./order.interface";
import { Order } from "../order.model";
import { Product } from "../product.model";
import { Schema } from "zod";
import { Types } from "mongoose";


const createOrder= async(orderData:Torder)=>{
   const {email,product,quantity}=orderData
   const id=new Types.ObjectId(product)

   const item=await Product.findById(id)

   if(!item){
    throw new Error('Product not found')
   }
   if(item.quantity<quantity){
    throw new Error('Insufficient stock')
   }
   const totalPrice=item.price*quantity;

   const result=await Order.create({
    email,
    product:product,
    quantity,
    totalPrice

   })
   item.quantity-=quantity;
   item.inStock=item.quantity>0;
   await item.save()

   return result


}

// const getRevenueFromOrders=async(OrderData:Torder)=>{
//     const 
// }



export const OrderServices={
    createOrder
}