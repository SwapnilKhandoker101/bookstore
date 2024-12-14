import { ObjectId } from "mongoose";
import { Product } from "../product.model";
import { TProduct } from "./product.interface";



const createProductIntoDB = async (productData: TProduct) => {
    if (productData._id && await Product.isinStock(productData._id.toString())) {
        throw new Error('Product already exists')     
    }
    const result=await Product.create(productData)
    return result

};

const getAllProductFromDB=async()=>{
    const result=await Product.find();
    return result
}

const getSpecificProductFromDB=async(id:ObjectId)=>{
    const result=await Product.findOne({id})
    return result
}
const updateProductFromDB= async (id:ObjectId,price:number,quantity:number)=>{
    const result=await Product.updateOne(
        {
            price:price
        },
        {
            quantity:quantity
        }
    )
    return result


}
const deleteProductFromDB= async (id:ObjectId)=>{
    const result=await Product.updateOne({id},{inStock:false})
    return result
}

export const ProductServices={
    createProductIntoDB,
    getAllProductFromDB,
    getSpecificProductFromDB,
    deleteProductFromDB
};