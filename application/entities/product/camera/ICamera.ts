interface ICamera extends IProduct
{
  maxISO: string;

  type: string;

  cropFactor: number;

  features: Array<Feature>;
}