import { Model, ObjectId } from "mongoose";

//Author type:
// export type TAuthor = {
//   firstName: string;
//   middleName?: string;
//   lastName: string;
// };

// Product Type:
export type TProduct = {
  _id?: ObjectId;
  title: string;
  author: string;
  price: number;
  category: "Fiction" | "Science" | "SelfDevelopment" | "Poetry" | "Religious";
  description: string;
  quantity: number;
  inStock: boolean;
};

export interface ProductModel extends Model<TProduct> {
  isinStock(id: string): Promise<TProduct | null>;
}
