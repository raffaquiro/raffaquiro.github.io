import { useState } from "react";
import Hero from "@/components/Hero.tsx";
import Services from "@/components/Services.tsx";
import Gallery from "@/components/Gallery.tsx";
import About from "@/components/About.tsx";
import Testimonials from "@/components/Testimonials.tsx";
import Footer from "@/components/Footer.tsx";
// import BookingModal from "@/components/BookingModal.tsx";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Hero onBookingClick={() => setBookingOpen(false)} /> {/* Mudar pra true se quiser mostrar no futuro */}
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Footer />
      {/* <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />*/}
    </div>
  );
};

export default Index;
