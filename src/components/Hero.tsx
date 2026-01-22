import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6"
import { FaArrowDown } from "react-icons/fa6";
import videoIntro from "@/assets/RAFFA_QUIRO_GERAL.mp4";

interface HeroProps {
  onBookingClick: () => void;
}

const Hero = ({ /* onBookingClick */ }: HeroProps) => {

  const handleWhatsAppClick = () => {
    const phoneNumber = "5544999176850";
    const message = "Olá, gostaria de agendar uma sessão de Quiropraxia.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Raffa Quiro
          </h1>
          
          <div className="mb-4 md:mb-8 mx-auto w-full max-w-md">
            <div className="rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-shadow duration-300 bg-black/5">
              <video
                className="w-full h-auto max-h-[45vh] sm:max-h-[55vh] md:max-h-[60vh] object-cover mx-auto"
                controls
                playsInline
                preload="metadata"
                poster=""
              >
                <source src={videoIntro} type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2 md:mb-4">
            Quiropraxia e Raciocínio Clínico Integrado RCI
          </p>
          <p className="text-lg text-muted-foreground mb-4 md:mb-8 max-w-2xl mx-auto">
            Cuide de sua Saúde com o melhor tratamento em Quiropraxia e Terapias Manuais de Maringá e região.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 shadow-elegant hover:shadow-glow transition-all duration-300"
              variant="secondary"
            >
              <FaWhatsapp size={50} />
              Agendar Sessão
            </Button>

            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
            >
              Saiba Mais 
            <FaArrowDown size={25}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
