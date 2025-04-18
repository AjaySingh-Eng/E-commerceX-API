'use client';

import { useSearchParams } from 'next/navigation';
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

export default function Home() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || undefined;

  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [aiRecommendations, setAiRecommendations] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | undefined>(initialCategory);
  const [gradientStyle, setGradientStyle] = useState('');


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

  const offers = [
    {
      id: 'o1',
      title: 'Summer Sale',
      description: 'Up to 50% off on selected items!',
      imageUrl: 'https://cbu01.alicdn.com/img/ibank/2018/773/581/8688185377_2107390325.jpg',
      cta: 'Shop Now',
    },
    {
      id: 'o2',
      title: 'New Arrivals',
      description: 'Check out our latest collection.',
      imageUrl: 'https://ph-test-11.slatic.net/p/aa0f67fbd74bb995aa022b33efeda858.jpg',
      cta: 'View New Arrivals',
    },
  ];

  const latestProducts = products.slice(0, 5);

  const sponsors = [
    {
      id: 's1',
      name: 'Adidas',
      logoUrl: 'https://picsum.photos/id/400/100/50',
      link: '#',
    },
    {
      id: 's2',
      name: 'Nike',
      logoUrl: 'https://picsum.photos/id/401/100/50',
      link: '#',
    },
  ];

  useEffect(() => {
    setGradientStyle('linear-gradient(to right, #f472b6, #1e40af)');
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="flex justify-start items-center mb-4">
        {/* Website Name */}
        <div className="text-2xl font-bold text-left mr-4">
          <span className="inline-block">
            <span className="text-red-500">F</span>
            <span className="text-orange-500">l</span>
            <span className="text-yellow-500">i</span>
            <span className="text-green-500">p</span>
            <span className="text-blue-500">m</span>
            <span className="text-indigo-500">i</span>
            <span className="text-violet-500">n</span>
            <span className="text-red-500">t</span>
          </span>
        </div>

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
        <div className="flex items-center ml-auto bg-white">
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

      {/* Offers Section */}
      <div className="mb-8 flex justify-center" style={{ background: gradientStyle }}>
        <div className="w-3/4">
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">Offers</h2>
          <div className="flex overflow-x-auto space-x-4 justify-center">
            {offers.map(offer => (
              <div key={offer.id} className="w-96 p-4 border rounded-md shadow-sm flex-shrink-0 bg-white">
                <img src={offer.imageUrl} alt={offer.title} className="w-full h-48 object-cover rounded-md mb-2" />
                <h3 className="text-xl font-semibold text-center">{offer.title}</h3>
                <p className="text-gray-500 text-center">{offer.description}</p>
                <div className="flex justify-center">
                  <Button className="mt-4 text-white" style={{ color: 'white', backgroundColor: '#1e40af' }}>{offer.cta}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Products Section */}
      <div className="mb-8 bg-white flex justify-center">
        <div className="w-3/4">
          <h2 className="text-2xl font-semibold mb-4 text-center">Latest Products</h2>
          <div className="flex overflow-x-auto space-x-4">
            {latestProducts.map(product => (
              <div key={product.id} className="w-64 p-4 border rounded-md shadow-sm flex-shrink-0">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-2" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <div className="text-xl font-semibold text-teal-500">${product.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sponsors</h2>
        <div className="flex overflow-x-auto space-x-4">
          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="w-48 p-4 border rounded-md shadow-sm flex-shrink-0">
              <img src={sponsor.logoUrl} alt={sponsor.name} className="w-full h-24 object-contain rounded-md mb-2" />
              <h3 className="text-xl font-semibold">{sponsor.name}</h3>
            </div>
          ))}
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
