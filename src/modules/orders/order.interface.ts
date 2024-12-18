import { Schema, model, connect, Model, ObjectId } from "mongoose";

export type Torder={
    email:string,
    product:string,
    quantity:number,
    totalPrice:number
}

