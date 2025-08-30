import { Target, Heart, Zap } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-fitness-primary/5 to-fitness-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Minha <span className="text-fitness-primary">Missão</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicado a transformar vidas através do movimento, promovendo saúde, 
            bem-estar e autoconfiança em cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-fitness-primary to-fitness-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-fitness)]">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Objetivos Claros</h3>
            <p className="text-muted-foreground">
              Definimos metas específicas e alcançáveis para garantir 
              seu progresso constante e motivação.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-fitness-secondary to-fitness-accent rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-card)]">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Cuidado Pessoal</h3>
            <p className="text-muted-foreground">
              Cada treino é personalizado considerando suas necessidades, 
              limitações e preferências individuais.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-fitness-accent to-fitness-primary rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-fitness)]">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Resultados Reais</h3>
            <p className="text-muted-foreground">
              Foco em transformações duradouras através de métodos 
              cientificamente comprovados e acompanhamento contínuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;