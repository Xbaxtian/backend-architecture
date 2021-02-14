import { Feature, IProduct } from ".";


export class Product implements IProduct
{
  constructor(
    public name: string,
    public manufacturer: string,
    public SKU: string,
    public features: Array<Feature> = [],
  ) {}

  getContent(): string {
    return "Hola";
  }

}
