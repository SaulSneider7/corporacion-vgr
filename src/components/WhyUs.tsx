import React from 'react';
import { ShieldCheck, Zap, Award, MonitorPlay } from 'lucide-react';
import { SectionId } from '../types';

const WhyUs: React.FC = () => {
  const differentiators = [
    {
      icon: ShieldCheck,
      title: "Seguridad Certificada",
      text: "Pilotos con licencia oficial y seguros de responsabilidad civil al día. Volamos bajo todas las normativas legales para tu tranquilidad."
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      text: "Entendemos la inmediatez de los medios digitales. Ofrecemos tiempos de entrega optimizados sin sacrificar la calidad de post-producción."
    },
    {
      icon: Award,
      title: "Calidad Cinema",
      text: "No usamos drones de juguete. Nuestra flota cuenta con sensores de gran tamaño, grabación en LOG y alto rango dinámico (HDR)."
    },
    {
      icon: MonitorPlay,
      title: "Edición Profesional",
      text: "No solo entregamos los archivos crudos. Ofrecemos servicio completo de edición, colorización y diseño sonoro."
    }
  ];

  return (
    <section id={SectionId.DIFFERENCE} className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-500 font-bold uppercase tracking-wider text-sm mb-2">Por qué elegirnos</h2>
            <h3 className="font-tech text-3xl md:text-4xl font-bold text-white mb-6">
              Más Que Un Dron,<br /> Una <span className="text-brand-500">Perspectiva Única</span>
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              En el mercado actual cualquiera puede comprar un dron, pero en VGR Drones ofrecemos experiencia, técnica y una mirada artística. Nos diferenciamos por entender el lenguaje audiovisual y aplicarlo a la tecnología aérea.
            </p>
            
            <div className="space-y-6">
              {differentiators.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/30">
                      <item.icon className="w-5 h-5 text-brand-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-brand-500/30 rounded-2xl blur-lg transform rotate-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=1740&auto=format&fit=crop" 
               alt="Drone pilot operating professional controller" 
               className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover aspect-square"
             />
             <div className="absolute -bottom-6 -left-6 bg-brand-dark p-6 rounded-xl border border-white/10 shadow-xl max-w-xs glass-panel">
               <div className="flex items-center space-x-4 mb-2">
                 <div className="text-4xl font-bold text-brand-500 font-tech">100%</div>
               </div>
               <p className="text-sm text-gray-300">Satisfacción garantizada en todos nuestros proyectos corporativos y sociales.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;