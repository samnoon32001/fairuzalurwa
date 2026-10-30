import React from 'react';
import {
  Briefcase,
  Building2,
  Car,
  Home,
  Landmark,
  Plane,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { ServiceCategoryData } from '../lib/services';

interface ServiceIconProps {
  name: ServiceCategoryData['iconName'];
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Plane':
      return <Plane className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Car':
      return <Car className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Home':
      return <Home className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    default:
      return <Briefcase className={className} />;
  }
};
