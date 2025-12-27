import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  level: number;
  color?: 'cyan' | 'purple' | 'green';
  delay?: number;
}

const SkillBar = ({ name, level, color = 'cyan', delay = 0 }: SkillBarProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const colorClasses = {
    cyan: 'bg-primary shadow-[0_0_10px_hsl(var(--primary))]',
    purple: 'bg-secondary shadow-[0_0_10px_hsl(var(--secondary))]',
    green: 'bg-accent shadow-[0_0_10px_hsl(var(--accent))]',
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-foreground font-semibold tracking-wide">{name}</span>
        <span className="text-muted-foreground font-mono text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            colorClasses[color]
          )}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
