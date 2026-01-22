import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5544999176850";
    const message = "Olá, gostaria de agendar uma sessão de Quiropraxia.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:animate-none"
      aria-label="Agendar no WhatsApp"
    >
      <FaWhatsapp size={32} className="group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default FloatingWhatsApp;
