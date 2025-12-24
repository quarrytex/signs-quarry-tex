import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { DollarSign, Car, Store, Type } from "lucide-react";
import type { VehicleWrapConfig, GlassWrapConfig, DimensionalSignConfig } from "@shared/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type ServiceType = "vehicle-wrap" | "glass-wrap" | "dimensional-sign";

export default function Configurator() {
  const { toast } = useToast();
  const [serviceType, setServiceType] = useState<ServiceType>("vehicle-wrap");
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const [vehicleConfig, setVehicleConfig] = useState<VehicleWrapConfig>({
    vehicleType: "car",
    coverage: "full-wrap",
    material: "standard",
    designComplexity: "simple",
    quantity: 1,
  });

  const [glassConfig, setGlassConfig] = useState<GlassWrapConfig>({
    applicationType: "storefront",
    squareFootage: 100,
    material: "perforated",
    designComplexity: "simple",
  });

  const [dimensionalConfig, setDimensionalConfig] = useState<DimensionalSignConfig>({
    material: "acrylic",
    letterHeight: 12,
    characterCount: 10,
    mounting: "stud-mount",
    finish: "painted",
  });

  const calculatePriceMutation = useMutation({
    mutationFn: async (data: { serviceType: string; options: any }) => {
      const response = await apiRequest("POST", "/api/configurations/calculate", data);
      return response.json();
    },
    onSuccess: (data) => {
      setEstimatedPrice(data.estimatedPrice);
    },
  });

  const saveConfigMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/configurations", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/configurations"] });
      toast({
        title: "Configuration Saved",
        description: "Your configuration has been saved successfully. We'll contact you soon!",
      });
      setCustomerName("");
      setCustomerEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save configuration. Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    const options = 
      serviceType === "vehicle-wrap" ? vehicleConfig :
      serviceType === "glass-wrap" ? glassConfig :
      dimensionalConfig;
    
    calculatePriceMutation.mutate({ serviceType, options });
  }, [serviceType, vehicleConfig, glassConfig, dimensionalConfig]);

  const handleSaveConfiguration = () => {
    const options = 
      serviceType === "vehicle-wrap" ? vehicleConfig :
      serviceType === "glass-wrap" ? glassConfig :
      dimensionalConfig;

    saveConfigMutation.mutate({
      serviceType,
      customerName: customerName || undefined,
      customerEmail: customerEmail || undefined,
      options,
      estimatedPrice,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Design & Price Your Project</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Configure your vehicle wrap, window wrap, or dimensional signage and get an instant price estimate
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs value={serviceType} onValueChange={(v) => setServiceType(v as ServiceType)}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="vehicle-wrap" data-testid="tab-vehicle-wrap">
                  <Car className="h-4 w-4 mr-2" />
                  Vehicle Wrap
                </TabsTrigger>
                <TabsTrigger value="glass-wrap" data-testid="tab-glass-wrap">
                  <Store className="h-4 w-4 mr-2" />
                  Window Wrap
                </TabsTrigger>
                <TabsTrigger value="dimensional-sign" data-testid="tab-dimensional-sign">
                  <Type className="h-4 w-4 mr-2" />
                  Dimensional Sign
                </TabsTrigger>
              </TabsList>

              <TabsContent value="vehicle-wrap">
                <Card>
                  <CardHeader>
                    <CardTitle>Vehicle Wrap Configuration</CardTitle>
                    <CardDescription>Customize your vehicle wrap specifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Vehicle Type</Label>
                      <Select value={vehicleConfig.vehicleType} onValueChange={(v) => setVehicleConfig({...vehicleConfig, vehicleType: v as any})}>
                        <SelectTrigger data-testid="select-vehicle-type">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Car</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="truck">Truck</SelectItem>
                          <SelectItem value="van">Van</SelectItem>
                          <SelectItem value="fleet">Fleet (Multiple Vehicles)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Coverage Type</Label>
                      <Select value={vehicleConfig.coverage} onValueChange={(v) => setVehicleConfig({...vehicleConfig, coverage: v as any})}>
                        <SelectTrigger data-testid="select-coverage">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-wrap">Full Wrap</SelectItem>
                          <SelectItem value="partial-wrap">Partial Wrap</SelectItem>
                          <SelectItem value="hood">Hood Only</SelectItem>
                          <SelectItem value="roof">Roof Only</SelectItem>
                          <SelectItem value="doors">Doors</SelectItem>
                          <SelectItem value="graphics">Graphics/Decals</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Material Quality</Label>
                      <Select value={vehicleConfig.material} onValueChange={(v) => setVehicleConfig({...vehicleConfig, material: v as any})}>
                        <SelectTrigger data-testid="select-material">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Vinyl</SelectItem>
                          <SelectItem value="premium">Premium Vinyl</SelectItem>
                          <SelectItem value="specialty">Specialty (Chrome, Carbon Fiber, etc.)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Design Complexity</Label>
                      <Select value={vehicleConfig.designComplexity} onValueChange={(v) => setVehicleConfig({...vehicleConfig, designComplexity: v as any})}>
                        <SelectTrigger data-testid="select-complexity">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="simple">Simple (Solid Colors)</SelectItem>
                          <SelectItem value="moderate">Moderate (Basic Graphics)</SelectItem>
                          <SelectItem value="complex">Complex (Custom Design)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Quantity</Label>
                      <Input
                        type="number"
                        min="1"
                        value={vehicleConfig.quantity}
                        onChange={(e) => setVehicleConfig({...vehicleConfig, quantity: parseInt(e.target.value) || 1})}
                        data-testid="input-quantity"
                      />
                      <p className="text-sm text-muted-foreground">Volume discounts available for multiple vehicles</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="glass-wrap">
                <Card>
                  <CardHeader>
                    <CardTitle>Window Wrap Configuration</CardTitle>
                    <CardDescription>Specify your window wrap requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Application Type</Label>
                      <Select value={glassConfig.applicationType} onValueChange={(v) => setGlassConfig({...glassConfig, applicationType: v as any})}>
                        <SelectTrigger data-testid="select-application-type">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="storefront">Storefront Windows</SelectItem>
                          <SelectItem value="office-glass">Office Glass Partitions</SelectItem>
                          <SelectItem value="display-windows">Display Windows</SelectItem>
                          <SelectItem value="privacy-film">Privacy Film</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Total Square Footage</Label>
                      <Input
                        type="number"
                        min="1"
                        max="1000"
                        value={glassConfig.squareFootage}
                        onChange={(e) => setGlassConfig({...glassConfig, squareFootage: parseInt(e.target.value) || 1})}
                        data-testid="input-square-footage"
                      />
                      <p className="text-sm text-muted-foreground">Enter the total area to be covered</p>
                    </div>

                    <div className="space-y-2">
                      <Label>Material Type</Label>
                      <Select value={glassConfig.material} onValueChange={(v) => setGlassConfig({...glassConfig, material: v as any})}>
                        <SelectTrigger data-testid="select-glass-material">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="perforated">Perforated Vinyl (See-Through)</SelectItem>
                          <SelectItem value="frosted">Frosted Film</SelectItem>
                          <SelectItem value="decorative">Decorative Graphics</SelectItem>
                          <SelectItem value="privacy">Privacy Tint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Design Complexity</Label>
                      <Select value={glassConfig.designComplexity} onValueChange={(v) => setGlassConfig({...glassConfig, designComplexity: v as any})}>
                        <SelectTrigger data-testid="select-glass-complexity">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="simple">Simple Pattern/Tint</SelectItem>
                          <SelectItem value="moderate">Branded Graphics</SelectItem>
                          <SelectItem value="complex">Custom Artwork</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dimensional-sign">
                <Card>
                  <CardHeader>
                    <CardTitle>Dimensional Sign Configuration</CardTitle>
                    <CardDescription>Design your dimensional letters and logos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Material</Label>
                      <Select value={dimensionalConfig.material} onValueChange={(v) => setDimensionalConfig({...dimensionalConfig, material: v as any})}>
                        <SelectTrigger data-testid="select-sign-material">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="acrylic">Acrylic</SelectItem>
                          <SelectItem value="metal">Metal (Aluminum/Stainless)</SelectItem>
                          <SelectItem value="foam">Foam (PVC)</SelectItem>
                          <SelectItem value="wood">Wood</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Letter Height (inches)</Label>
                      <Input
                        type="number"
                        min="2"
                        max="72"
                        value={dimensionalConfig.letterHeight}
                        onChange={(e) => setDimensionalConfig({...dimensionalConfig, letterHeight: parseInt(e.target.value) || 12})}
                        data-testid="input-letter-height"
                      />
                      <p className="text-sm text-muted-foreground">Typical range: 6-24 inches</p>
                    </div>

                    <div className="space-y-2">
                      <Label>Number of Characters</Label>
                      <Input
                        type="number"
                        min="1"
                        max="100"
                        value={dimensionalConfig.characterCount}
                        onChange={(e) => setDimensionalConfig({...dimensionalConfig, characterCount: parseInt(e.target.value) || 10})}
                        data-testid="input-character-count"
                      />
                      <p className="text-sm text-muted-foreground">Letters, numbers, and spaces</p>
                    </div>

                    <div className="space-y-2">
                      <Label>Mounting Type</Label>
                      <Select value={dimensionalConfig.mounting} onValueChange={(v) => setDimensionalConfig({...dimensionalConfig, mounting: v as any})}>
                        <SelectTrigger data-testid="select-mounting">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stud-mount">Stud Mount</SelectItem>
                          <SelectItem value="flush-mount">Flush Mount</SelectItem>
                          <SelectItem value="standoff">Standoff (Raised)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Finish</Label>
                      <Select value={dimensionalConfig.finish} onValueChange={(v) => setDimensionalConfig({...dimensionalConfig, finish: v as any})}>
                        <SelectTrigger data-testid="select-finish">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="painted">Painted (Custom Color)</SelectItem>
                          <SelectItem value="brushed">Brushed Metal</SelectItem>
                          <SelectItem value="led-lit">LED Illuminated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Price Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-6 border rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Estimated Total</p>
                  <p className="text-4xl font-bold text-primary" data-testid="text-estimated-price">
                    ${estimatedPrice.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name (Optional)</Label>
                    <Input
                      id="name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter your name"
                      data-testid="input-customer-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="your@email.com"
                      data-testid="input-customer-email"
                    />
                  </div>

                  <Button
                    className="w-full"
                    onClick={handleSaveConfiguration}
                    disabled={saveConfigMutation.isPending}
                    data-testid="button-save-config"
                  >
                    {saveConfigMutation.isPending ? "Saving..." : "Save Configuration"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    This is an estimate. Final pricing will be provided after consultation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
