import { Button } from '@/components/ui/button';
import GlitchText from './GlitchText';
import TypewriterText from './TypewriterText';
import { Download, Mail, MapPin, Phone } from 'lucide-react';

const HeroSection = () => {
  const roles = [
    'Jovem Aprendiz Administrativo',
    'Suporte TI & Logística',
    'Desenvolvedor Python & Excel VBA',
    'Data Analytics Enthusiast',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block px-4 py-2 border border-primary/50 rounded-full text-primary font-mono text-sm tracking-wider">
            &lt;/&gt; PORTFOLIO 2025
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <GlitchText text="DELFINO" className="text-gradient-cyber" />
        </h1>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          ODÍLIO
        </h2>

        <div className="h-12 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <TypewriterText 
            texts={roles} 
            className="text-xl md:text-2xl text-primary font-semibold" 
          />
        </div>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          Busco oportunidade como Jovem Aprendiz ou efetivo. Formação técnica em Administração 
          com experiência em logística, suporte administrativo e domínio de <span className="text-primary">Excel (VBA)</span>, 
          <span className="text-secondary"> Python</span> e <span className="text-accent">Análise de Dados</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Button variant="hero" size="xl" asChild>
            <a href="#contato">
              <Mail className="w-5 h-5" />
              Entrar em Contato
            </a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href="#experiencia">
              <Download className="w-5 h-5" />
              Ver Experiência
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Teresina, PI</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>(86) 9 9463-4380</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>delfinoodilio1234@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
