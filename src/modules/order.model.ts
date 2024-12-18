import { Schema, model, Model, ObjectId, Types } from "mongoose";
import { Torder } from "./orders/order.interface";

const orderSchema=new Schema<Torder>({
    email:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
        
    },
    quantity:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number
    }
})


export const Order=model<Torder>('Order',orderSchema);
