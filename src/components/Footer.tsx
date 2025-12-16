import React from 'react';
import { Aperture } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Aperture className="h-6 w-6 text-brand-500" />
            <span className="font-tech text-xl font-bold tracking-wider text-white">
              VGR <span className="text-brand-500">DRONES</span>
            </span>
          </div>

          {/* Derechos */}
          <div className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} VGR Drones. Todos los derechos reservados.
          </div>

          {/* Autor */}
          <div className="text-gray-500 text-sm text-center">
            Diseñado y desarrollado por{" "}
            <a
              href="https://saulsneider7.github.io/snei_web/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-400 transition-colors font-medium"
            >
              Saúl Sneider
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
