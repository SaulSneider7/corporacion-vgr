import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <div id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop" 
          alt="Drone flying over city landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/50 to-brand-dark"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-brand-500 font-bold tracking-widest text-sm md:text-base mb-4 animate-pulse">
          SERVICIOS AUDIOVISUALES PROFESIONALES
        </h2>
        <h1 className="font-tech text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          ELEVA TU <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-cyan-300">VISIÓN</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
          Capturamos el mundo desde perspectivas imposibles. Especialistas en grabaciones 4K, obras civiles y eventos corporativos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(14,165,233,0.5)]"
          >
            Explorar Servicios
          </button>
          <button 
             onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full font-bold transition-all backdrop-blur-sm"
          >
            Cotizar Ahora
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>

      
    </div>
  );
};

export default Hero;