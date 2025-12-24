import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Car, Building, Type, ArrowLeft, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

type ServiceType = "vehicle-wrap" | "window-wrap" | "custom-signs" | null;

interface QuoteFormData {
  email: string;
  service: ServiceType;
  vehicleType: string;
  vehicleColor: string;
  projectDetails: string;
  imageUrls: string[];
}

export function Contact() {
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
  const [formData, setFormData] = useState<QuoteFormData>({
    email: "",
    service: null,
    vehicleType: "",
    vehicleColor: "",
    projectDetails: "",
    imageUrls: []
  });
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const { toast } = useToast();

  const createQuoteMutation = useMutation({
    mutationFn: async (data: QuoteFormData) => {
      const payload: any = {
        email: data.email,
        service: data.service,
        projectDetails: data.projectDetails,
        imageUrls: data.imageUrls.filter(url => url.trim() !== "")
      };

      if (data.service === "vehicle-wrap") {
        payload.vehicleType = data.vehicleType;
        payload.vehicleColor = data.vehicleColor;
      }

      return await apiRequest("POST", "/api/quote-requests", payload);
    },
    onSuccess: () => {
      toast({
        title: "Quote request sent!",
        description: "We'll get back to you soon at your email address.",
      });
      // Reset form
      setSelectedService(null);
      setFormData({
        email: "",
        service: null,
        vehicleType: "",
        vehicleColor: "",
        projectDetails: "",
        imageUrls: []
      });
      setCurrentImageUrl("");
    },
    onError: (error: Error) => {
      toast({
        title: "Error submitting request",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createQuoteMutation.mutate({ ...formData, service: selectedService });
  };

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
    setFormData({ ...formData, service });
  };

  const handleBack = () => {
    setSelectedService(null);
    setFormData({
      email: "",
      service: null,
      vehicleType: "",
      vehicleColor: "",
      projectDetails: "",
      imageUrls: []
    });
  };

  const addImageUrl = () => {
    if (currentImageUrl.trim()) {
      setFormData({
        ...formData,
        imageUrls: [...formData.imageUrls, currentImageUrl.trim()]
      });
      setCurrentImageUrl("");
    }
  };

  const removeImageUrl = (index: number) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index)
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get a Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your brand? Choose your service and get started
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              {!selectedService ? (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center">Select a Service</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-32 flex flex-col gap-3 hover-elevate"
                      onClick={() => handleServiceSelect("vehicle-wrap")}
                      data-testid="button-service-vehicle"
                    >
                      <Car className="h-8 w-8" />
                      <span className="font-bold">Vehicle Wrap</span>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-32 flex flex-col gap-3 hover-elevate"
                      onClick={() => handleServiceSelect("window-wrap")}
                      data-testid="button-service-window"
                    >
                      <Building className="h-8 w-8" />
                      <span className="font-bold">Window Wrap</span>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-32 flex flex-col gap-3 hover-elevate"
                      onClick={() => handleServiceSelect("custom-signs")}
                      data-testid="button-service-signs"
                    >
                      <Type className="h-8 w-8" />
                      <span className="font-bold">Custom Signs</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleBack}
                      data-testid="button-back"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <h3 className="text-2xl font-bold">
                      {selectedService === "vehicle-wrap" && "Vehicle Wrap Quote"}
                      {selectedService === "window-wrap" && "Window Wrap Quote"}
                      {selectedService === "custom-signs" && "Custom Signs Quote"}
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        data-testid="input-email"
                      />
                    </div>

                    {selectedService === "vehicle-wrap" && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2">Type of Vehicle *</label>
                          <Input
                            value={formData.vehicleType}
                            onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                            placeholder="e.g., Car, Truck, Van, SUV"
                            required
                            data-testid="input-vehicle-type"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Vehicle Color *</label>
                          <Input
                            value={formData.vehicleColor}
                            onChange={(e) => setFormData({ ...formData, vehicleColor: e.target.value })}
                            placeholder="e.g., White, Black, Silver"
                            required
                            data-testid="input-vehicle-color"
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {selectedService === "vehicle-wrap" ? "Additional Info *" : "Project Details *"}
                      </label>
                      <Textarea
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        data-testid="input-project-details"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <div className="flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          Add Images (optional)
                        </div>
                      </label>
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <Input
                            type="url"
                            value={currentImageUrl}
                            onChange={(e) => setCurrentImageUrl(e.target.value)}
                            placeholder="Paste image URL here"
                            data-testid="input-image-url"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={addImageUrl}
                            disabled={!currentImageUrl.trim()}
                            data-testid="button-add-image"
                          >
                            Add
                          </Button>
                        </div>
                        {formData.imageUrls.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">Added images:</p>
                            {formData.imageUrls.map((url, index) => (
                              <div key={index} className="flex items-center justify-between gap-2 p-2 bg-muted rounded-md">
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm truncate flex-1 text-primary hover:underline"
                                  data-testid={`link-image-${index}`}
                                >
                                  {url}
                                </a>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeImageUrl(index)}
                                  data-testid={`button-remove-image-${index}`}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      data-testid="button-submit-quote"
                      disabled={createQuoteMutation.isPending}
                    >
                      {createQuoteMutation.isPending ? "Submitting..." : "Request Quote"}
                    </Button>
                  </form>
                </div>
              )}
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">(908) 322-8488</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">signs@quarrytex.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">1998 US-22, Scotch Plains, NJ 07076</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
