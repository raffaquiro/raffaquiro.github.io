import { Activity, Heart, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Activity,
    title: "Alívio Imediato",
    description: "Avaliação e tratamento das disfunções estruturais que causam dor muscular ou articular."
  },
  {
    icon: Shield,
    title: "Prevenção",
    description: "Cuidados preventivos para manter sua saúde e evitar lesões futuras. Avaliações e manipulações específicas em pontos de tensão."
  },
  {
    icon: Zap,
    title: "Recovery",
    description: "Recuperação muscular e articular para atletas de alto rendimento."
  },
  {
    icon: Heart,
    title: "Preparatório",
    description: "Ideal para Crossfiteiros, Corredores e Lutadores prepararem-se para provas."
  },
  {
    icon: Heart,
    title: "Fibromialgia e Crises Emocionais",
    description: "Através da manipulação no crânio e nos tecidos moles, combatemos o estresse emocional de situações de bloqueio e conflito em somatização ao corpo."
  },
  {
    icon: Activity,
    title: "Disfunções Viscerais",
    description: "Manipulação superficial sobre pontos de tensão nas vísceras, que causam má digestão, azia, constipação, cólicas, dentre outras disfunções."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="w-11/12 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meus Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tratamentos especializados em quiropraxia para o seu bem-estar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
