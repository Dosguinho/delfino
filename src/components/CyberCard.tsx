import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'green';
  hover3D?: boolean;
}

const CyberCard = ({ children, className, glowColor = 'cyan', hover3D = true }: CyberCardProps) => {
  const glowClasses = {
    cyan: 'border-glow-cyan hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]',
    purple: 'border-glow-purple hover:shadow-[0_0_30px_hsl(var(--secondary)/0.6)]',
    green: 'border-glow-green hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)]',
  };

  return (
    <div
      className={cn(
        "relative bg-card/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300",
        glowClasses[glowColor],
        hover3D && "card-3d",
        className
      )}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg" />
      
      {children}
    </div>
  );
};

export default CyberCard;
