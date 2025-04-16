/**
 * Represents a product with its details.
 */
export interface Product {
  /**
   * The unique identifier of the product.
   */
id: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string;
  /**
   * The price of the product.
   */
  price: number;
  /**
   * The URL of the product image.
   */
  imageUrl: string;
}

/**
 * Asynchronously retrieves product information for a given product ID.
 *
 * @param productId The ID of the product to retrieve.
 * @returns A promise that resolves to a Product object containing the product details.
 */
export async function getProduct(productId: string): Promise<Product> {
  // TODO: Implement this by calling an API.

  return {
    id: productId,
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: 25.00,
    imageUrl: 'https://example.com/sample-image.jpg',
  };
}

/**
 * Asynchronously retrieves a list of products based on a search query.
 *
 * @param query The search query to filter products.
 * @returns A promise that resolves to an array of Product objects that match the search query.
 */
export async function searchProducts(query: string): Promise<Product[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      id: '1',
      name: 'Product 1',
      description: 'Description for Product 1.',
      price: 19.99,
      imageUrl: 'https://example.com/product1.jpg',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description for Product 2.',
      price: 29.99,
      imageUrl: 'https://example.com/product2.jpg',
    },
  ];
}
