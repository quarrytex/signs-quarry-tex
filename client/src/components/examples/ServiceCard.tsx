import { ServiceCard } from '../ServiceCard';
import { Truck } from 'lucide-react';
import vehicleImage from '@assets/stock_images/professional_vehicle_78e299dc.jpg';

export default function ServiceCardExample() {
  return (
    <ServiceCard
      title="Vehicle & Fleet Wraps"
      description="Transform your vehicles into moving advertisements"
      image={vehicleImage}
      icon={Truck}
      features={[
        "Full and partial vehicle wraps",
        "Fleet branding solutions",
        "High-impact vinyl graphics"
      ]}
    />
  );
}
