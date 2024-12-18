import { Request, Response } from "express";
import orderValidationSchema from "./order.zod.validation";
import { OrderServices } from "./order.service";
import { Torder } from "./order.interface";



const createOrder=async(req:Request,res:Response)=>{
    try{
        const { order: orderData } = req.body;
        console.log(orderData)
        const zodparsedData=orderValidationSchema.parse(orderData)
        const result=await OrderServices.createOrder(zodparsedData)
        res.status(200).json({
            message: "Order created successfully",
            success: true,
            data: result,
          });


    }catch(err:any){
        res.status(400).json({
            message: err.message || 'Failed to create order',
            success: false,
            err,
            stack: err.stack,
          });
    }
}

const getRevenueFromOrders=async(req:Request,res:Response)=>{
    try{
        const result=await OrderServices.getRevenueFromOrders()
        res.status(200).json({
            success:true,
            message: "Revenue calculated successfully",
            data:{result}
        })

    }catch(err:any){
        res.status(400).json({
            message: err.message || 'Failed to calculate the revenue',
            success: false,
            err,
            stack: err.stack,
          });
    }
} 

export const OrderControllers={
    createOrder,
    getRevenueFromOrders
}