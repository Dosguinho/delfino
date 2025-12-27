import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-card/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="font-display font-bold">
              <span className="text-primary">D</span>ELFINO
              <span className="text-secondary">.</span>
            </span>
            <span>Todos os direitos reservados</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-destructive animate-pulse" />
            <span>e</span>
            <Code className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
