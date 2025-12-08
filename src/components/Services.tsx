import { Activity, Heart, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Activity,
    title: "Ajustes Vertebrais",
    description: "Correção de subluxações vertebrais para restaurar o movimento adequado e aliviar dores."
  },
  {
    icon: Heart,
    title: "Tratamento Holístico",
    description: "Abordagem completa focada no bem-estar integral do corpo e mente."
  },
  {
    icon: Zap,
    title: "Alívio Imediato",
    description: "Técnicas eficazes para redução rápida de dores agudas e crônicas."
  },
  {
    icon: Shield,
    title: "Prevenção",
    description: "Cuidados preventivos para manter sua saúde e evitar lesões futuras."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meus Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tratamentos especializados em quiropraxia para o seu bem-estar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
