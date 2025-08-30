import { Award, Users, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "200+", label: "Clientes Transformados" },
    { icon: Clock, value: "5+", label: "Anos de Experiência" },
    { icon: Award, value: "15+", label: "Certificações" },
    { icon: TrendingUp, value: "95%", label: "Taxa de Sucesso" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-fitness-primary">Mim</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Sou um personal trainer apaixonado por transformar vidas através do fitness. 
                Com mais de 5 anos de experiência, já ajudei centenas de pessoas a alcançarem 
                seus objetivos de saúde e bem-estar.
              </p>
              
              <p>
                Minha abordagem combina conhecimento científico com motivação pessoal, 
                criando programas de treino únicos que se adaptam ao seu estilo de vida 
                e necessidades específicas.
              </p>
              
              <p>
                Acredito que cada pessoa tem potencial para ser a melhor versão de si mesma, 
                e estou aqui para guiá-la nessa jornada de transformação física e mental.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Especializações:</h3>
              <div className="flex flex-wrap gap-3">
                {["Hipertrofia", "Emagrecimento", "Condicionamento", "Reabilitação", "Nutrição Esportiva"].map((spec) => (
                  <span
                    key={spec}
                    className="px-4 py-2 bg-gradient-to-r from-fitness-primary/10 to-fitness-secondary/10 text-fitness-primary border border-fitness-primary/20 rounded-full font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-to-br from-card to-muted/20 border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-fitness)] transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-fitness-primary to-fitness-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-white" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-fitness-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;