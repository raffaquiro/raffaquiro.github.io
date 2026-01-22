import { Award, Users, Clock, MapPin } from "lucide-react";
import treatmentMain from "@/assets/treatment-main.jpeg";

const stats = [
  { icon: Users, label: "Pacientes Atendidos", value: "+ DE 2.000" },
  { icon: Award, label: "Anos de Experiência em Dor", value: "2+" },
  { icon: Clock, label: "Horas de Atendimento", value: "+ DE 3.000" },
  { icon: MapPin, label: "SAG Terapias", value: "Av. Itororó, 637" }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Olá, me chamo Rafael, quiroprata e massoterapeuta pioneiro no método RCI em Maringá - PR. Meu compromisso é oferecer tratamentos personalizados que promovam saúde, bem-estar e qualidade de vida para você, sua família ou sua empresa.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Utilizo técnicas modernas e comprovadas cientificamente para tratar dores nas costas, pescoço, dores de cabeça, articulações e outros problemas relacionados à origem mecânica.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isLocation = stat.icon === MapPin;
                const content = (
                  <>
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    {isLocation && (
                      <div className="text-sm text-primary text-right mt-1 mb-0 underline">
                        Veja no mapa
                      </div>
                    )}
                  </>
                );

                if (isLocation) {
                  return (
                    <a
                      key={index}
                      href="https://maps.google.com/?q=SAG+Terapias,+Av.+Itororó,+637,+Zona+2,+Maringá+-+PR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 hover:border-primary/50 transition-all cursor-pointer"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={index} className="p-4 rounded-lg border border-border/50 bg-secondary/20">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={treatmentMain} 
                alt="Quiropraxista Raffa Quiro realizando ajuste cervical" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">2+</div>
              <div className="text-sm opacity-90">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
