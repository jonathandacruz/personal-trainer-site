import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-fitness-primary mb-4">PT Pro</h3>
            <p className="text-muted mb-6">
              Transformando vidas através do fitness com dedicação, 
              conhecimento e resultados comprovados.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-fitness-primary rounded-full flex items-center justify-center hover:bg-fitness-primary-dark transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-fitness-primary rounded-full flex items-center justify-center hover:bg-fitness-primary-dark transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-fitness-primary rounded-full flex items-center justify-center hover:bg-fitness-primary-dark transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-fitness-primary rounded-full flex items-center justify-center hover:bg-fitness-primary-dark transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-muted hover:text-fitness-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#mission" className="text-muted hover:text-fitness-primary transition-colors">
                  Missão
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted hover:text-fitness-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#methods" className="text-muted hover:text-fitness-primary transition-colors">
                  Métodos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted hover:text-fitness-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-muted">
              <p>📧 contato@ptpro.com</p>
              <p>📱 (11) 99999-9999</p>
              <p>📍 São Paulo, SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8 text-center text-muted">
          <p>&copy; {currentYear} PT Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;