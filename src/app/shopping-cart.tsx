"use client";

import {useEffect, useState} from 'react';
import {Product} from '@/services/product';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';

interface ShoppingCartProps {
  cart: {[key: string]: number};
  products: Product[];
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  aiRecommendations: string[];
  addToCart: (product: Product) => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cart,
  products,
  removeFromCart,
  updateCartItemQuantity,
  aiRecommendations,
  addToCart,
}) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      for (const productId in cart) {
        const product = products.find(p => p.id === productId);
        if (product) {
          total += product.price * cart[productId];
        }
      }
      setCartTotal(total);
    };

    calculateTotal();
  }, [cart, products]);

  return (
    <div className="flex flex-col">
      {Object.keys(cart).length === 0 ? (
        <div className="text-center py-4">Your cart is empty.</div>
      ) : (
        <>
          <ul className="mb-4">
            {Object.entries(cart).map(([productId, quantity]) => {
              const product = products.find(p => p.id === productId);
              if (!product) return null;

              return (
                <li key={productId} className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <div className="font-semibold">{product.name}</div>
                      <div className="text-sm text-gray-500">
                        ${product.price.toFixed(2)} x {quantity}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      min="0"
                      className="w-20 text-center mr-2"
                      value={quantity}
                      onChange={e =>
                        updateCartItemQuantity(productId, parseInt(e.target.value, 10))
                      }
                    />
                    <Button variant="destructive" size="sm" onClick={() => removeFromCart(productId)}>
                      Remove
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="text-right mb-4">
            <div className="text-xl font-semibold">Total: ${cartTotal.toFixed(2)}</div>
            <Button>Checkout</Button>
          </div>
        </>
      )}

      {aiRecommendations.length > 0 && (
        <div className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {aiRecommendations.map(productId => {
                const recommendedProduct = products.find(p => p.id === productId);
                if (!recommendedProduct) return null;

                return (
                  <div key={productId} className="flex flex-col items-center">
                    <img
                      src={recommendedProduct.imageUrl}
                      alt={recommendedProduct.name}
                      className="w-24 h-24 object-cover rounded-md mb-2"
                    />
                    <div className="text-sm font-semibold">{recommendedProduct.name}</div>
                    <div className="text-xs text-gray-500">${recommendedProduct.price.toFixed(2)}</div>
                    <Button size="sm" onClick={() => addToCart(recommendedProduct)}>
                      Add to Cart
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
