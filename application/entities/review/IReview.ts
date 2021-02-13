import { IProduct } from "../product";

export interface IReview
{
  title: string;

  content: string;

  author: string;

  product: IProduct;
}
