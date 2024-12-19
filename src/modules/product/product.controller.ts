import { Request, Response } from "express";
import productValidationSchema from "./product.zod.validation";
import { ProductServices } from "./product.service";
import { TProduct } from "./product.interface";
import { error } from "console";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    // console.log(productData);
    const zodparsedData = productValidationSchema.parse(productData);
    const result = await ProductServices.createProductIntoDB(
      zodparsedData as TProduct,
    );
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
      stack: err.stack,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
      stack: err.stack,
    });
  }
};

const getSpecificProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { _id } = req.params;
    // if(!mongoose.Types.ObjectId.isValid(_id)){
    //      res.status(400).json({
    //         success:false,
    //         message:'Invalid product ID format'
    //     })
    // }
    // const objectId:Types.ObjectId=new mongoose.Types.ObjectId(_id);
    const result = await ProductServices.getSpecificProductFromDB(_id);
    res.status(200).json({
      success: true,
      message: "Specific product is retreived successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err.stack,
    });
  }
};

const updateProductFromDB = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { productId } = req.params;
    // console.log(productId);
    const { price, quantity } = req.body;
    if (price == null || quantity == null) {
      throw error("price and quantity cannot be null");
    }
    // if(!mongoose.Types.ObjectId.isValid(_id)){
    //     return res.status(400).json({
    //         success:false,
    //         message:'Invalid product ID format'
    //     })
    // }
    // const objectId:Types.ObjectId=new mongoose.Types.ObjectId(_id);
    const result = await ProductServices.updateProductFromDB(
      productId,
      price,
      quantity,
    );
    console.log(result);
    if (result.matchedCount === 0) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Product updated ",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err.stack,
    });
  }
};

const deleteProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // if(!mongoose.Types.ObjectId.isValid(_id)){
    //     return res.status(400).json({
    //         success:false,
    //         message:'Invalid product ID format'
    //     })
    // }
    // const objectId:Types.ObjectId=new mongoose.Types.ObjectId(_id);
    const result = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted ",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err.stack,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  updateProductFromDB,
  deleteProductFromDB,
};
