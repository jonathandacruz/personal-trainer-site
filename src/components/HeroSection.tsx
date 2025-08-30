import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Personal Trainer em ação" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforme Seu
          <span className="block bg-gradient-to-r from-fitness-primary to-fitness-secondary bg-clip-text text-transparent">
            Corpo e Mente
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Personal trainer especializado em transformar vidas através do fitness. 
          Treinos personalizados para alcançar seus objetivos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={scrollToContact} size="lg" className="bg-fitness-primary hover:bg-fitness-primary-dark text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[var(--shadow-fitness)]">
            Comece Agora
            <ArrowRight className="ml-2" size={20} />
          </Button>
          
          <Button variant="outline" size="lg" className="border-white px-8 py-6 text-lg font-semibold transition-all duration-300 text-gray-700 bg-zinc-50 rounded-md ">
            <Play className="mr-2" size={20} />
            Ver Métodos
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;