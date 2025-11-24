import { Award, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Users, label: "Pacientes Atendidos", value: "500+" },
  { icon: Award, label: "Anos de Experiência", value: "10+" },
  { icon: Clock, label: "Horas de Atendimento", value: "5000+" },
  { icon: MapPin, label: "Localização", value: "Central" }
];

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre RaffaQuiro</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Com mais de uma década de experiência em quiropraxia, nosso compromisso é 
              oferecer tratamentos personalizados que promovam saúde, bem-estar e qualidade de vida.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Utilizamos técnicas modernas e comprovadas para tratar dores nas costas, 
              pescoço, articulações e outros problemas relacionados à coluna vertebral.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="p-4 rounded-lg border border-border/50">
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-elegant" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
