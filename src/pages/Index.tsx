import { useState } from "react";
import Hero from "@/components/Hero.ts";
import Services from "@/components/Services.ts";
import Gallery from "@/components/Gallery.ts";
import About from "@/components/About.ts";
import Testimonials from "@/components/Testimonials.ts";
import Footer from "@/components/Footer.ts";
import BookingModal from "@/components/BookingModal.ts";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Hero onBookingClick={() => setBookingOpen(true)} />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
