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
  /**
   * The category of the product.
   */
  category?: string;
  /**
   * The subcategory of the product.
   */
  subcategory?: string;
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
    imageUrl: 'https://cbu01.alicdn.com/img/ibank/2018/773/581/8688185377_2107390325.jpg',
    category: 'men',
    subcategory: 't-shirts',
  };
}

/**
 * Asynchronously retrieves a list of products based on a search query and category.
 *
 * @param query The search query to filter products.
 * @param category The category to filter products.
 * @param subcategory The subcategory to filter products.
 * @returns A promise that resolves to an array of Product objects that match the search query.
 */
export async function searchProducts(query: string, category?: string, subcategory?: string): Promise<Product[]> {
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Stylish Blue T-Shirt',
      description: 'A comfortable and stylish blue t-shirt for casual wear.',
      price: 29.99,
      imageUrl: 'https://picsum.photos/id/250/300/200',
      category: 'men',
      subcategory: 't-shirts',
    },
    {
      id: '2',
      name: 'Elegant Black Dress',
      description: 'A classic black dress perfect for evening events.',
      price: 79.99,
      imageUrl: 'https://picsum.photos/id/251/300/200',
      category: 'women',
      subcategory: 'dresses',
    },
    {
      id: '3',
      name: 'Casual White Sneakers',
      description: 'Comfortable white sneakers suitable for everyday use.',
      price: 59.99,
      imageUrl: 'https://picsum.photos/id/252/300/200',
      category: 'men',
      subcategory: 'shoes',
    },
    {
      id: '4',
      name: 'Warm Winter Jacket',
      description: 'A warm and cozy winter jacket to keep you protected from the cold.',
      price: 99.99,
      imageUrl: 'https://picsum.photos/id/253/300/200',
      category: 'men',
      subcategory: 'jackets',
    },
    {
      id: '5',
      name: 'Classic Denim Jeans',
      description: 'A pair of classic denim jeans that can be styled in many ways.',
      price: 49.99,
      imageUrl: 'https://picsum.photos/id/254/300/200',
      category: 'men',
      subcategory: 'jeans',
    },
    {
      id: '6',
      name: 'Summer Floral Skirt',
      description: 'A vibrant floral skirt perfect for summer outings.',
      price: 39.99,
      imageUrl: 'https://picsum.photos/id/255/300/200',
      category: 'women',
      subcategory: 'skirts',
    },
    {
      id: '7',
      name: 'Leather Ankle Boots',
      description: 'Stylish leather ankle boots for a chic look.',
      price: 89.99,
      imageUrl: 'https://picsum.photos/id/256/300/200',
      category: 'women',
      subcategory: 'shoes',
    },
    {
      id: '8',
      name: 'Striped Cotton Shirt',
      description: 'A comfortable striped cotton shirt for a relaxed style.',
      price: 34.99,
      imageUrl: 'https://picsum.photos/id/257/300/200',
      category: 'men',
      subcategory: 'shirts',
    },
    {
      id: '9',
      name: 'Wool Blend Sweater',
      description: 'A soft wool blend sweater perfect for cooler days.',
      price: 69.99,
      imageUrl: 'https://picsum.photos/id/258/300/200',
      category: 'men',
      subcategory: 'sweaters',
    },
    {
      id: '10',
      name: 'Sporty Running Shorts',
      description: 'Lightweight running shorts ideal for workouts and sports activities.',
      price: 24.99,
      imageUrl: 'https://picsum.photos/id/259/300/200',
      category: 'men',
      subcategory: 'shorts',
    },
    {
      id: '11',
      name: 'Girls Party Dress',
      description: 'A Fancy dress for girls for partys',
      price: 44.99,
      imageUrl: 'https://picsum.photos/id/260/300/200',
      category: 'kids',
      subcategory: 'dresses',
    },
    {
      id: '12',
      name: 'Boys T-shirt',
      description: 'A simple and cool t-shirt for boys',
      price: 14.99,
      imageUrl: 'https://picsum.photos/id/261/300/200',
      category: 'kids',
      subcategory: 'shirts',
    },
    {
      id: '13',
      name: 'Simple Bed',
      description: 'A simple bed for your home',
      price: 244.99,
      imageUrl: 'https://picsum.photos/id/270/300/200',
      category: 'home',
      subcategory: 'furniture',
    },
    {
      id: '14',
      name: 'Table',
      description: 'A simple table for your home',
      price: 144.99,
      imageUrl: 'https://picsum.photos/id/271/300/200',
      category: 'home',
      subcategory: 'furniture',
    },
    {
      id: '15',
      name: 'Red lipstick',
      description: 'A vibrant lipstick for your beauty',
      price: 24.99,
      imageUrl: 'https://picsum.photos/id/280/300/200',
      category: 'beauty',
      subcategory: 'makeup',
    },
    {
      id: '16',
      name: 'Foundation',
      description: 'A  base foundation for your beauty',
      price: 34.99,
      imageUrl: 'https://picsum.photos/id/281/300/200',
      category: 'beauty',
      subcategory: 'makeup',
    },
    {
      id: '17',
      name: 'Cool cap',
      description: 'A vibrant cap for genz',
      price: 14.99,
      imageUrl: 'https://picsum.photos/id/290/300/200',
      category: 'genz',
      subcategory: 'accessories',
    },
    {
      id: '18',
      name: 'Baggy jeans',
      description: 'A cool baggy jeans for genz',
      price: 54.99,
      imageUrl: 'https://picsum.photos/id/291/300/200',
      category: 'genz',
      subcategory: 'clothing',
    },
    {
      id: '19',
      name: 'Paint Brush',
      description: 'A cool paint brush for your painting',
      price: 4.99,
      imageUrl: 'https://picsum.photos/id/300/300/200',
      category: 'studio-new',
      subcategory: 'art',
    },
    {
      id: '20',
      name: 'Canvas',
      description: 'A new canvas for your art',
      price: 14.99,
      imageUrl: 'https://picsum.photos/id/301/300/200',
      category: 'studio-new',
      subcategory: 'art',
    },
  ];

  let filteredProducts = allProducts;

  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  if (subcategory) {
    filteredProducts = filteredProducts.filter(product => product.subcategory === subcategory);
  }


  if (query) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  return filteredProducts;
}
