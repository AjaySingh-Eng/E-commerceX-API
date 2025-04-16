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
      name: 'Stylish Blue T-Shirt',
      description: 'A comfortable and stylish blue t-shirt for casual wear.',
      price: 29.99,
      imageUrl: 'https://picsum.photos/id/250/300/200',
    },
    {
      id: '2',
      name: 'Elegant Black Dress',
      description: 'A classic black dress perfect for evening events.',
      price: 79.99,
      imageUrl: 'https://picsum.photos/id/251/300/200',
    },
    {
      id: '3',
      name: 'Casual White Sneakers',
      description: 'Comfortable white sneakers suitable for everyday use.',
      price: 59.99,
      imageUrl: 'https://picsum.photos/id/252/300/200',
    },
    {
      id: '4',
      name: 'Warm Winter Jacket',
      description: 'A warm and cozy winter jacket to keep you protected from the cold.',
      price: 99.99,
      imageUrl: 'https://picsum.photos/id/253/300/200',
    },
    {
      id: '5',
      name: 'Classic Denim Jeans',
      description: 'A pair of classic denim jeans that can be styled in many ways.',
      price: 49.99,
      imageUrl: 'https://picsum.photos/id/254/300/200',
    },
    {
      id: '6',
      name: 'Summer Floral Skirt',
      description: 'A vibrant floral skirt perfect for summer outings.',
      price: 39.99,
      imageUrl: 'https://picsum.photos/id/255/300/200',
    },
    {
      id: '7',
      name: 'Leather Ankle Boots',
      description: 'Stylish leather ankle boots for a chic look.',
      price: 89.99,
      imageUrl: 'https://picsum.photos/id/256/300/200',
    },
    {
      id: '8',
      name: 'Striped Cotton Shirt',
      description: 'A comfortable striped cotton shirt for a relaxed style.',
      price: 34.99,
      imageUrl: 'https://picsum.photos/id/257/300/200',
    },
    {
      id: '9',
      name: 'Wool Blend Sweater',
      description: 'A soft wool blend sweater perfect for cooler days.',
      price: 69.99,
      imageUrl: 'https://picsum.photos/id/258/300/200',
    },
    {
      id: '10',
      name: 'Sporty Running Shorts',
      description: 'Lightweight running shorts ideal for workouts and sports activities.',
      price: 24.99,
      imageUrl: 'https://picsum.photos/id/259/300/200',
    },
  ];
}
