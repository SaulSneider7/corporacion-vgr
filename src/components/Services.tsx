import React from 'react';
import { Camera, HardHat, PartyPopper, Image, Building2, CalendarCheck } from 'lucide-react';
import { SectionId } from '../types';
import type { ServiceItem } from '../types';


const services: ServiceItem[] = [
  {
    title: "Grabaciones 4K/6K",
    description: "Calidad cinematográfica con estabilización perfecta. Ideal para producciones de alto nivel, publicidad y cine.",
    icon: Camera,
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "Obras Civiles",
    description: "Seguimiento de avances de obra, inspecciones técnicas de estructuras y fotogrametría para ingenieros y arquitectos.",
    icon: HardHat,
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    title: "Celebraciones",
    description: "Bodas, cumpleaños y fiestas privadas. Capturamos la emoción desde el aire sin interrumpir el momento.",
    icon: PartyPopper,
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    title: "Fotos Profesionales",
    description: "Fotografía aérea de alta resolución (20MP+) en formato RAW para edición profesional y gran formato.",
    icon: Image,
    image: "https://picsum.photos/600/400?random=4"
  },
  {
    title: "Grabaciones Empresariales",
    description: "Videos corporativos para mostrar instalaciones, flota de vehículos o procesos industriales con una imagen moderna.",
    icon: Building2,
    image: "https://picsum.photos/600/400?random=5"
  },
  {
    title: "Registro de Eventos",
    description: "Cobertura completa de eventos masivos, deportivos o conciertos, mostrando la magnitud de la asistencia.",
    icon: CalendarCheck,
    image: "https://picsum.photos/600/400?random=6"
  }
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-brand-dark relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-bold uppercase tracking-wider text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="font-tech text-3xl md:text-5xl font-bold text-white">Soluciones Aéreas Integrales</h3>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnología de punta operada por profesionales para entregar resultados que superan las expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/5 hover:border-brand-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
            >
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
              </div>
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 font-tech">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <a href={`#${SectionId.CONTACT}`} className="inline-flex items-center text-brand-500 font-semibold text-sm hover:text-brand-300 transition-colors">
                  Solicitar info
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Services;