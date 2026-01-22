import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Balan",
    text: "Profissional excelente, dedicado e muito capacitado, possui postura e caráter impecáveis. Conheci através de uma indicação e hoje indico para todos em minha volta! O Raffa consegue resgatar o nosso próprio conforto em nosso corpo.",
    rating: 5
  },
  {
    name: "Enzo Negri Vinholi",
    text: "Atendimento bom e rápido, estava com dor na lombar e em 15 minutos resolveu.",
    rating: 5
  },
  {
    name: "Cristina Kelly",
    text: "O Rafael é muito atencioso, meu marido chegou lá não estava nem andando, saiu bem, sem dor e com certeza iremos voltar.",
    rating: 5
  },
  {
    name: "Chiara Alves De Souza",
    text: "Estou fazendo acompanhamento semanal com liberações e tem sido essencial na minha preparação para correr minha quarta maratona!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O Que Dizem Meus Pacientes</h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de quem experimentou meus tratamentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
