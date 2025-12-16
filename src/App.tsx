import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import TechInfo from './components/Techinfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <TechInfo />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;