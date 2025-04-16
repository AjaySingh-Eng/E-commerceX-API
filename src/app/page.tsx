"use client";

import {useState, useEffect} from 'react';
import {Product, searchProducts} from '@/services/product';
import {getProductRecommendations} from '@/ai/flows/product-recommendations';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ShoppingCart} from './shopping-cart';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import {Badge} from "@/components/ui/badge"
import {Icons} from "@/components/icons";
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  searchParams: {
    category?: string
  }
}

export default function Home({searchParams}: Props) {
  const {category: initialCategory} = searchParams;
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [aiRecommendations, setAiRecommendations] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | undefined>(initialCategory);

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await searchProducts(searchTerm, activeCategory);
      setProducts(results);
    };

    fetchProducts();
  }, [searchTerm, activeCategory]);

  useEffect(() => {
    const fetchAiRecommendations = async () => {
      if (Object.keys(cart).length === 0) {
        setAiRecommendations([]);
        return;
      }

      const cartItems = Object.entries(cart).map(([productId, quantity]) => ({
        productId,
        quantity,
      }));

      try {
        const recommendations = await getProductRecommendations({cartItems});
        setAiRecommendations(recommendations.recommendedProductIds);
      } catch (error) {
        console.error('Failed to fetch AI recommendations:', error);
        setAiRecommendations([]);
      }
    };

    fetchAiRecommendations();
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      return {...prevCart, [product.id]: (prevCart[product.id] || 0) + 1};
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const newCart = {...prevCart};
      delete newCart[productId];
      return newCart;
    });
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    setCart(prevCart => {
      if (quantity <= 0) {
        const newCart = {...prevCart};
        delete newCart[productId];
        return newCart;
      }
      return {...prevCart, [productId]: quantity};
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="flex justify-start items-center mb-4">
        {/* Logo */}
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/frappe-st.appspot.com/o/MarG%2Flogo.png?alt=media&token=0e7b9433-df3c-425f-8790-7c9b3a311a59"
          alt="MarG Logo"
          width={50}
          height={50}
          className="mr-4 rounded-full"
        />

        {/* Website Name */}
        <div className="text-2xl font-bold text-left mr-4">MarG</div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/men" className="hover:text-gray-700">Men</Link>
          <Link href="/women" className="hover:text-gray-700">Women</Link>
          <Link href="/kids" className="hover:text-gray-700">Kids</Link>
          <Link href="/home" className="hover:text-gray-700">Home</Link>
          <Link href="/beauty" className="hover:text-gray-700">Beauty</Link>
          <Link href="/genz" className="hover:text-gray-700">Genz</Link>
          <Link href="/studio-new" className="hover:text-gray-700">Studio New</Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center ml-auto">
             <Input
            type="search"
            placeholder="Search for products..."
            className="w-full md:w-1/2 mr-4"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* Cart Icon and Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                Bag
                {Object.keys(cart).length > 0 && (
                  <Badge className="ml-2">{Object.keys(cart).length}</Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Shopping Cart</DialogTitle>
                <DialogDescription>
                  Review and manage the items in your cart.
                </DialogDescription>
              </DialogHeader>
              <ShoppingCart
                cart={cart}
                products={products}
                removeFromCart={removeFromCart}
                updateCartItemQuantity={updateCartItemQuantity}
                aiRecommendations={aiRecommendations}
                addToCart={addToCart}
              />
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="ml-2">
            Profile
          </Button>
          <Button variant="outline" className="ml-2">
            Wishlist
          </Button>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <CardDescription className="text-center">{product.description}</CardDescription>
              <div className="text-xl font-semibold text-teal-500">${product.price.toFixed(2)}</div>
              <Button className="mt-4" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
