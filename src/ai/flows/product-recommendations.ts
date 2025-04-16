'use server';
/**
 * @fileOverview Product recommendation AI agent.
 *
 * - getProductRecommendations - A function that handles the product recommendation process.
 * - GetProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - GetProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {Product} from '@/services/product';

const GetProductRecommendationsInputSchema = z.object({
  cartItems: z
    .array(
      z.object({
        productId: z.string().describe('The ID of the product in the cart.'),
        quantity: z.number().describe('The quantity of the product in the cart.'),
      })
    )
    .describe('The items currently in the user cart.'),
});
export type GetProductRecommendationsInput = z.infer<typeof GetProductRecommendationsInputSchema>;

const GetProductRecommendationsOutputSchema = z.object({
  recommendedProductIds: z
    .array(z.string())
    .describe('The IDs of the products recommended based on the cart items.'),
});
export type GetProductRecommendationsOutput = z.infer<typeof GetProductRecommendationsOutputSchema>;

export async function getProductRecommendations(input: GetProductRecommendationsInput): Promise<GetProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const productRecommendationTool = ai.defineTool({
  name: 'getProductRecommendationsFromDb',
  description: 'This tool retrieves product recommendations from a database based on a list of product IDs currently in the cart.',
  inputSchema: z.object({
    productIds: z.array(z.string()).describe('The list of product IDs in the cart.'),
  }),
  outputSchema: z.array(z.string()).describe('List of recommended product IDs.'),
},
async input => {
  // TODO: Replace with actual database call for fetching product recommendations.
  // This is a placeholder implementation.
  const recommendedProducts = ['3', '4', '5']; // Example product IDs.
  return recommendedProducts;
});

const prompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  tools: [productRecommendationTool],
  input: {
    schema: z.object({
      cartItems: z
        .array(
          z.object({
            productId: z.string().describe('The ID of the product in the cart.'),
            quantity: z.number().describe('The quantity of the product in the cart.'),
          })
        )
        .describe('The items currently in the user cart.'),
    }),
  },
  output: {
    schema: z.object({
      recommendedProductIds: z
        .array(z.string())
        .describe('The IDs of the products recommended based on the cart items.'),
    }),
  },
  prompt: `Based on the items in the cart, what other products would the user be interested in?

Cart Items:
{{#each cartItems}}
- Product ID: {{this.productId}}, Quantity: {{this.quantity}}
{{/each}}

Use the getProductRecommendationsFromDb tool to get the recommended product IDs.
`, 
});

const productRecommendationsFlow = ai.defineFlow<
  typeof GetProductRecommendationsInputSchema,
  typeof GetProductRecommendationsOutputSchema
>(
  {
    name: 'productRecommendationsFlow',
    inputSchema: GetProductRecommendationsInputSchema,
    outputSchema: GetProductRecommendationsOutputSchema,
  },
  async input => {
    const productIds = input.cartItems.map(item => item.productId);
    const recommendedProductIds = await productRecommendationTool({productIds});
    return { recommendedProductIds };
  }
);
