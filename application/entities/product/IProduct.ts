import { Feature } from "./Feature";

export interface IProduct
{
  name: string;

  manufacturer: string;

  SKU: string;

  getContent(): string;
}
