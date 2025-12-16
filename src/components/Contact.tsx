import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { SiInstagram, SiFacebook } from '@icons-pack/react-simple-icons';
import { SectionId } from '../types';


const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Configuración de WhatsApp
    const phoneNumber = "51923005130";
    const text = `Hola Corporación VGR, deseo realizar una cotización o consulta desde la web.\n\n*Nombre:* ${formState.name}\n*Email:* ${formState.email}\n*Mensaje:* ${formState.message}`;
    
    // Abrir WhatsApp en nueva pestaña
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpiar formulario opcionalmente
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Información de Contacto (Izquierda) */}
          <div>
            <h2 className="text-brand-500 font-bold uppercase tracking-wider text-sm mb-2">Contáctanos</h2>
            <h3 className="font-tech text-4xl font-bold text-white mb-6">Empecemos Tu Proyecto</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              ¿Listo para ver tu proyecto desde otra altura? Escríbenos para una cotización personalizada o para resolver cualquier duda sobre nuestros servicios de drones.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-white/10 shrink-0">
                  <Phone className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase">Llámanos / WhatsApp</div>
                  <div className="font-semibold text-lg">+51 923 005 130</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-white/10 shrink-0">
                  <Mail className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase">Correos Corporativos</div>
                  <div className="font-semibold text-sm">clientes@corporacionvgr.com</div>
                  <div className="font-semibold text-sm">administracion@corporacionvgr.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase">Ubicación</div>
                  <div className="font-semibold">Lima, Perú</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-white/10 shrink-0">
                  <Clock className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase">Horario de Atención</div>
                  <div className="font-semibold text-sm">Lun - Vie: 8:00am - 5:00pm</div>
                  <div className="font-semibold text-sm">Sábados: 9:00am - 3:00pm</div>
                  <div className="text-xs text-gray-500">Domingos: Cerrado</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-600 transition-all">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-600 transition-all">
                <SiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Formulario (Derecha) */}
          <div className="bg-gray-900 p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="nombre@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje / Detalle del Proyecto</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos sobre tu evento u obra..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Enviar por WhatsApp</span>
                  <ExternalLink size={18} />
                </button>
                <p className="text-xs text-center text-gray-500">
                  Al enviar, serás redirigido a WhatsApp Web o App para confirmar el mensaje.
                </p>
              </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;