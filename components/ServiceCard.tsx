import type React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, url, Icon, gradient } = service;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group flex flex-col justify-between p-6 rounded-2xl bg-slate-800/80 border border-slate-700
                 shadow-lg transition-all duration-300 ease-in-out h-full
                 hover:shadow-2xl hover:border-sky-500/50 hover:-translate-y-1`}
    >
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{ background: `radial-gradient(400px at top left, ${gradient}, transparent 80%)`}}>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-grow">
            <div className="p-3 rounded-lg bg-slate-700/50 w-max mb-4">
                 <Icon className="h-7 w-7 text-sky-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {description}
            </p>
        </div>

        <div className="mt-6 flex items-center text-sm font-semibold text-sky-400 group-hover:text-sky-300 transition-colors duration-200">
          <span>Tovább az eszközhöz</span>
          <ArrowRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};
