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
    imageUrl: 'https://picsum.photos/200/300',
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
      imageUrl: 'https://picsum.photos/id/237/300/200',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description for Product 2.',
      price: 29.99,
      imageUrl: 'https://picsum.photos/id/238/300/200',
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description for Product 3.',
      price: 39.99,
      imageUrl: 'https://picsum.photos/id/239/300/200',
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'Description for Product 4.',
      price: 49.99,
      imageUrl: 'https://picsum.photos/id/240/300/200',
    },
    {
      id: '5',
      name: 'Product 5',
      description: 'Description for Product 5.',
      price: 59.99,
      imageUrl: 'https://picsum.photos/id/241/300/200',
    },
    {
      id: '6',
      name: 'Product 6',
      description: 'Description for Product 6.',
      price: 69.99,
      imageUrl: 'https://picsum.photos/id/242/300/200',
    },
    {
      id: '7',
      name: 'Product 7',
      description: 'Description for Product 7.',
      price: 79.99,
      imageUrl: 'https://picsum.photos/id/243/300/200',
    },
    {
      id: '8',
      name: 'Product 8',
      description: 'Description for Product 8.',
      price: 89.99,
      imageUrl: 'https://picsum.photos/id/244/300/200',
    },
    {
      id: '9',
      name: 'Product 9',
      description: 'Description for Product 9.',
      price: 99.99,
      imageUrl: 'https://picsum.photos/id/245/300/200',
    },
    {
      id: '10',
      name: 'Product 10',
      description: 'Description for Product 10.',
      price: 109.99,
      imageUrl: 'https://picsum.photos/id/246/300/200',
    },
  ];
}
