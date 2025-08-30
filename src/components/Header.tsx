import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-fitness-primary">
          PT Pro
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-foreground hover:text-fitness-primary transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("mission")}
            className="text-foreground hover:text-fitness-primary transition-colors"
          >
            Missão
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-fitness-primary transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("methods")}
            className="text-foreground hover:text-fitness-primary transition-colors"
          >
            Métodos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-fitness-primary transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left text-foreground hover:text-fitness-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="text-left text-foreground hover:text-fitness-primary transition-colors"
            >
              Missão
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-fitness-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("methods")}
              className="text-left text-foreground hover:text-fitness-primary transition-colors"
            >
              Métodos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-foreground hover:text-fitness-primary transition-colors"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;