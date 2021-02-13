import { IProduct } from ".";


export class Product implements IProduct
{    
  constructor(
    public name: string,
    public manufacturer: string,
    public SKU: string,
  ) {}

  getContent(): string {
    throw new Error("Method not implemented.");
  }

}
