import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente profissional! Minhas dores nas costas diminuíram significativamente após algumas sessões.",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Atendimento impecável e resultados rápidos. Recomendo a todos que sofrem com dores articulares.",
    rating: 5
  },
  {
    name: "Ana Paula",
    text: "A quiropraxia mudou minha qualidade de vida. O Dr. Raffa é muito atencioso e competente.",
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
