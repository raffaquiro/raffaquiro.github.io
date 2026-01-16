import { Activity, Heart, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Activity,
    title: "Ajustes Vertebrais",
    description: "Correção de disfunções vertebrais para restaurar o movimento adequado e aliviar suas dores."
  },
  {
    icon: Heart,
    title: "Liberação Miofascial ",
    description: "Relaxamento muscular, tratando musculaturas que fixam lesões Quiropráticas."
  },
  {
    icon: Zap,
    title: "Mobilização Neural",
    description: "Mobilização dos nervos, restaurando espasticidade movimento e elasticidade dos nervos."
  },
  {
    icon: Shield,
    title: "Haguihara e Infravermelho",
    description: "Recuperação tecidual acelerada de Músculos e Nervos."
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
