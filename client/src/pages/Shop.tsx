import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, ShoppingCart, Check } from "lucide-react";
import { useLocation } from "wouter";
import type { Product } from "@shared/schema";
import { useState } from "react";

export default function Shop() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });
  
  const [, setLocation] = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setLocation(`/checkout?productId=${product.id}`);
  };

  const formatPrice = (priceInCents: number) => {
    return `$${(priceInCents / 100).toFixed(2)}`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Shop
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium vehicle accessories and patriotic products
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="w-full h-48 bg-muted rounded-md mb-4"></div>
                    <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="products-grid">
              {products.map((product) => (
                <Card 
                  key={product.id} 
                  className="hover-elevate transition-all duration-300 flex flex-col"
                  data-testid={`product-${product.id}`}
                >
                  <CardHeader>
                    <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                      {product.imageUrl ? (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <QrCode className="w-24 h-24 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-2xl" data-testid={`product-name-${product.id}`}>
                        {product.name}
                      </CardTitle>
                      <Badge variant="secondary" data-testid={`product-category-${product.id}`}>
                        {product.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-base" data-testid={`product-description-${product.id}`}>
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    {product.features && product.features.length > 0 && (
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  <CardFooter className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-3xl font-bold" data-testid={`product-price-${product.id}`}>
                        {formatPrice(product.price)}
                      </div>
                      {product.inStock > 0 ? (
                        <div className="text-sm text-muted-foreground">
                          In Stock
                        </div>
                      ) : (
                        <div className="text-sm text-destructive">
                          Out of Stock
                        </div>
                      )}
                    </div>
                    <Button
                      size="lg"
                      onClick={() => handleBuyNow(product)}
                      disabled={product.inStock === 0}
                      data-testid={`button-buy-${product.id}`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <QrCode className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground text-lg">
                  No products available at this time. Check back soon!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
