import React from 'react';
import { SectionId } from '../types';

const TechInfo: React.FC = () => {
  return (
    <section id={SectionId.AV_INFO} className="py-24 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-tech text-white mb-12">
          El Poder de lo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-brand-500">Audiovisual</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="col-span-1 md:col-span-2 bg-gray-900 rounded-2xl overflow-hidden border border-white/5 relative group">
           <img 
             src="https://picsum.photos/1000/600?random=20" 
             alt="Filming set" 
             className="w-full h-64 md:h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity"
           />
           <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-gray-900 to-transparent">
             <h3 className="text-2xl font-bold text-white mb-2">Narrativa Visual</h3>
             <p className="text-gray-300">
               El contenido audiovisual no se trata solo de imágenes bonitas; se trata de contar historias. 
               Un video bien estructurado aumenta la retención del mensaje en un 95% comparado con el texto.
               En VGR Drones, utilizamos el plano aéreo para dar contexto, magnitud y espectacularidad a esa narrativa.
             </p>
           </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl border border-white/5 flex flex-col justify-center">
          <h4 className="text-xl font-bold text-brand-500 mb-6">Especificaciones Técnicas</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Calidad de Imagen</p>
              <p className="text-white font-semibold">CODEC: ProRes / H.265</p>
              <p className="text-white font-semibold">COLOR: 10-bit D-Log</p>
            </div>
            
            <div className="w-full h-px bg-white/10"></div>

            <div>
               <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Resolución</p>
               <p className="text-white text-sm">
                 <strong className="text-brand-500">4K (UHD):</strong> 4 veces más píxeles que Full HD.
               </p>
            </div>

            <div>
               <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Framerate</p>
               <p className="text-white text-sm">
                 <strong className="text-brand-500">60fps+</strong> para Slow Motion fluido.
               </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-900 to-brand-700 p-8 rounded-2xl border border-white/5 md:col-span-3 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-left">
             <h4 className="text-2xl font-bold text-white mb-2">Impacto en Redes Sociales</h4>
             <p className="text-brand-100 max-w-2xl">
               Los algoritmos actuales priorizan el video. El contenido con drones tiene un 70% más de interacción debido a su naturaleza inmersiva. Ideal para Reels, TikTok y campañas de YouTube.
             </p>
           </div>
           <button className="px-6 py-3 bg-white text-brand-900 font-bold rounded-lg hover:bg-brand-50 transition-colors whitespace-nowrap">
             Potencia tu Marca
           </button>
        </div>

      </div>
    </section>
  );
};

export default TechInfo;