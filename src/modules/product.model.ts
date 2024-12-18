import { Schema, model, Model, ObjectId, Types } from "mongoose";
import { ProductModel, TAuthor, TProduct } from "./product/product.interface";
import validator from 'validator';


const authorSchema = new Schema<TAuthor>({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true,
        
    },
    middleName: {
        type: String,
        trim: true,
        maxlength: [100, 'Middle name cannot be more than 100 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        trim: true,
        
        
    }
},
{_id:false});


const productSchema = new Schema<TProduct, ProductModel>(
    {
        title: {
            type: String,
            required: [true, 'Product title is required'],
            trim: true,
            maxlength: [200, 'Title cannot exceed 200 characters']
        },
        author: {
            type: authorSchema,
            required: true
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
            min: [0, 'Price must be a positive value']
        },
        category: {
            type: String,
            enum: ["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"],
            required: [true, 'Category is required']
        },
        description: {
            type: String,
            trim: true,
            maxlength: [1000, 'Description cannot exceed 1000 characters']
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity is required'],
            min: [0, 'Quantity must be at least 0']
        },
        inStock: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    {
        timestamps: true 
    }
);


productSchema.statics.isinStock = async function (id:ObjectId): Promise<TProduct | null> {
    return this.findById(id).then(product => {
        if (product && product.inStock) {
            return product;
        }
        return null;
    });
};


export const Product = model<TProduct, ProductModel>('Product', productSchema);

