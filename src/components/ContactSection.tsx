import { Button } from '@/components/ui/button';
import CyberCard from './CyberCard';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-primary/50 rounded-full text-primary font-mono text-sm tracking-wider mb-4">
            CONEXÃO
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Vamos <span className="text-gradient-cyber">Conectar</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Estou disponível para novas oportunidades. Entre em contato!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <CyberCard glowColor="cyan">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Informações</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:delfinoodilio1234@gmail.com"
                className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-muted hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="text-foreground font-semibold">delfinoodilio1234@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+5586994634380"
                className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-muted hover:border-secondary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center border border-secondary/50 group-hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)] transition-all duration-300">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Telefone</p>
                  <p className="text-foreground font-semibold">(86) 9 9463-4380</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-muted">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center border border-accent/50">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Localização</p>
                  <p className="text-foreground font-semibold">Teresina, PI - Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-muted">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Disponibilidade</p>
                  <p className="text-foreground font-semibold">Manhã (4h ou 6h)</p>
                </div>
              </div>
            </div>
          </CyberCard>

          {/* CTA Card */}
          <CyberCard glowColor="purple" className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Pronto para o próximo nível?
              </h3>
              <p className="text-muted-foreground mb-6">
                Tenho interesse em tecnologia, inovação e processos eficientes. 
                Busco aplicar e expandir meus conhecimentos em um ambiente profissional dinâmico.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm">
                  #Tecnologia
                </span>
                <span className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm">
                  #Inovação
                </span>
                <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm">
                  #Eficiência
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="hero" size="xl" className="w-full" asChild>
                <a href="mailto:delfinoodilio1234@gmail.com">
                  <Send className="w-5 h-5" />
                  Enviar Email
                </a>
              </Button>
              
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="secondary" className="flex-1" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </CyberCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
