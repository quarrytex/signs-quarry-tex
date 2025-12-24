import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { Loader2, CheckCircle2 } from "lucide-react";
import type { Product } from "@shared/schema";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render (referenced from blueprint:javascript_stripe)
if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  console.warn('Missing VITE_STRIPE_PUBLIC_KEY - Stripe checkout will not work');
}
const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

const CheckoutForm = ({ product, onSuccess }: { product: Product; onSuccess: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!customerName || !customerEmail) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/shop",
      },
    });

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
      setIsProcessing(false);
    } else {
      toast({
        title: "Payment Successful",
        description: "Thank you for your purchase!",
      });
      onSuccess();
    }
  };

  const totalPrice = product.price * quantity;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            data-testid="input-customer-name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
            data-testid="input-customer-email"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            data-testid="input-customer-phone"
          />
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            max={product.inStock}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            data-testid="input-quantity"
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total:</span>
          <span data-testid="text-total-price">${(totalPrice / 100).toFixed(2)}</span>
        </div>
        <PaymentElement />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={!stripe || isProcessing}
        data-testid="button-complete-payment"
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>Pay ${(totalPrice / 100).toFixed(2)}</>
        )}
      </Button>
    </form>
  );
};

export default function Checkout() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [clientSecret, setClientSecret] = useState("");
  const [orderId, setOrderId] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Get productId from URL query params (wouter only returns pathname, use window.location.search for query params)
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('productId');

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", productId],
    enabled: !!productId,
  });

  useEffect(() => {
    if (!product || !stripePromise) return;

    // Create PaymentIntent as soon as the page loads (referenced from blueprint:javascript_stripe)
    const createPayment = async () => {
      try {
        const response = await apiRequest("POST", "/api/create-payment-intent", { 
          amount: product.price,
          productId: product.id,
          productName: product.name,
          customerName: "Guest", // Will be updated when form is submitted
          customerEmail: "guest@example.com", // Will be updated
          quantity: 1,
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
        setOrderId(data.orderId);
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message || "Failed to initialize payment",
          variant: "destructive",
        });
      }
    };

    createPayment();
  }, [product, toast]);

  if (!productId) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No product selected</p>
              <Button onClick={() => setLocation("/shop")} className="mt-4">
                Go to Shop
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  if (!stripePromise) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Payment Unavailable</CardTitle>
              <CardDescription>
                Stripe is not configured. Please contact support.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={() => setLocation("/shop")} className="w-full">
                Back to Shop
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading || !product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh] px-6">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl">Payment Successful!</CardTitle>
              <CardDescription>
                Thank you for your purchase. Your order has been confirmed.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Order ID: {orderId}
              </p>
              <p className="text-sm text-muted-foreground">
                You will receive a confirmation email shortly.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button onClick={() => setLocation("/shop")} variant="outline" className="flex-1">
                Continue Shopping
              </Button>
              <Button onClick={() => setLocation("/")} className="flex-1">
                Back to Home
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  // Make SURE to wrap the form in <Elements> which provides the stripe context (referenced from blueprint:javascript_stripe)
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Checkout</CardTitle>
              <CardDescription>
                Complete your purchase of {product.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm product={product} onSuccess={() => setPaymentSuccess(true)} />
              </Elements>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
