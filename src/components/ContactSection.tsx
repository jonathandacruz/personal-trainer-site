import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve para agendarmos sua consulta.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99999-9999",
      href: "tel:+5511999999999",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contato@ptpro.com",
      href: "mailto:contato@ptpro.com",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-fitness-primary/5 to-fitness-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos <span className="text-fitness-primary">Começar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua vida? Entre em contato e vamos criar 
            o plano perfeito para seus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-fitness-primary to-fitness-secondary rounded-full flex items-center justify-center">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-fitness-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-fitness-primary to-fitness-secondary p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Primeira Consulta Grátis!</h3>
              <p className="mb-4">
                Agende uma avaliação gratuita para conhecer melhor seus objetivos 
                e definirmos o melhor plano de treino para você.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Avaliação física completa</li>
                <li>• Definição de objetivos</li>
                <li>• Plano personalizado</li>
                <li>• Orientações nutricionais básicas</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-muted focus:border-fitness-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-muted focus:border-fitness-primary"
                    />
                  </div>
                </div>
                
                <Input
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-muted focus:border-fitness-primary"
                />
                
                <Textarea
                  name="message"
                  placeholder="Conte-me sobre seus objetivos e como posso ajudá-lo..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="border-muted focus:border-fitness-primary"
                />
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-fitness-primary hover:bg-fitness-primary-dark text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-[var(--shadow-fitness)]"
                >
                  <Send className="mr-2" size={20} />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;