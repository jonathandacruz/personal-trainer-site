import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import strengthImage from "@/assets/strength-training.jpg";
import cardioImage from "@/assets/cardio-training.jpg";
import functionalImage from "@/assets/functional-training.jpg";

const MethodsSection = () => {
  const methods = [
    {
      title: "Treino de Força",
      description: "Desenvolvimento muscular e aumento da força através de exercícios com pesos, focando em hipertrofia e resistência.",
      image: strengthImage,
      benefits: ["Ganho de massa muscular", "Aumento da força", "Melhora do metabolismo", "Fortalecimento ósseo"],
    },
    {
      title: "Treino Cardiovascular",
      description: "Exercícios aeróbicos para melhorar a capacidade cardiorrespiratória e promover o emagrecimento saudável.",
      image: cardioImage,
      benefits: ["Queima de gordura", "Melhora cardiovascular", "Aumento da resistência", "Redução do estresse"],
    },
    {
      title: "Treino Funcional",
      description: "Movimentos naturais do corpo para melhorar a funcionalidade, equilíbrio e coordenação no dia a dia.",
      image: functionalImage,
      benefits: ["Melhora da mobilidade", "Equilíbrio e coordenação", "Prevenção de lesões", "Aplicação prática"],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="methods" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Métodos de <span className="text-fitness-primary">Treino</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Programas personalizados que combinam diferentes metodologias para 
            maximizar seus resultados de forma segura e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {methods.map((method, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-fitness)] transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={method.image}
                  alt={method.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-fitness-primary">
                  {method.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {method.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Benefícios:</h4>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-fitness-primary rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-fitness-primary hover:bg-fitness-primary-dark text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[var(--shadow-fitness)]"
          >
            Escolha Seu Método
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;