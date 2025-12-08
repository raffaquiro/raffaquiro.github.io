import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import treatment1 from "@/assets/treatment-1.jpeg";
import treatment2 from "@/assets/treatment-2.jpeg";
import treatment3 from "@/assets/treatment-3.jpeg";
import treatmentMain from "@/assets/treatment-main.jpeg";

const images = [
  { src: treatmentMain, alt: "Ajuste quiroprático cervical" },
  { src: treatment1, alt: "Tratamento quiroprático nas costas" },
  { src: treatment2, alt: "Paciente após sessão de quiropraxia" },
  { src: treatment3, alt: "Ajuste quiroprático na coluna" },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meu Trabalho</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco do meu espaço e dos tratamentos que realizo
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="overflow-hidden rounded-2xl shadow-elegant">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
            <CarouselNext className="right-2 md:-right-12 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
