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

export const OrderControllers={
    createOrder
}