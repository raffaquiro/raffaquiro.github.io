import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Raffa Quiro
            </h3>
            <p className="text-muted-foreground">
              Cuidando da sua saúde com profissionalismo e dedicação.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+55 (44) 99917-6850</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>raffaquiro@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>SAG Terapias<br />Av. Itororó, 637, Zona 2<br />Maringá - PR</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horário</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1" />
                <div>
                  <div>Seg - Sex: 9h - 19h</div>
                  <div>Sáb: 9h - 14h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2026 Raffa Quiro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
