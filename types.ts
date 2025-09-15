import type React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  url: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  gradient: string;
}
