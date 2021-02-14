import { IProduct, Product } from "../../../application/entities";

describe('Product Entitie', () => {
  it('Should return content', () => {
    // setup
    const product: IProduct = new Product("Camara", "CANON", "test-sku");

    // execution
    const content = product.getContent();

    // assertion
    expect(typeof content).toEqual("string");
    expect(content).toBeTruthy();
  });
})
