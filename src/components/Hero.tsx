import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface HeroProps {
  onBookingClick: () => void;
}

const Hero = ({ onBookingClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            RaffaQuiro
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Quiropraxia Especializada
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cuide da sua saúde com tratamentos personalizados de quiropraxia. 
            Alívio de dores, melhora da postura e qualidade de vida.
          </p>
          
          <Button 
            size="lg" 
            onClick={onBookingClick}
            className="text-lg px-8 py-6 shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Sessão
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
