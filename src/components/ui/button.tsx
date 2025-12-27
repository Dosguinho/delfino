import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold font-display uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]",
        secondary: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary/10 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.5)]",
        ghost: "text-primary hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        cyber: "relative overflow-hidden border-2 border-primary bg-primary/10 text-primary before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]",
        neon: "relative border-2 border-accent bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)] after:absolute after:inset-0 after:rounded-md after:shadow-[inset_0_0_10px_hsl(var(--accent)/0.3)]",
        hero: "relative px-8 py-4 text-lg border-2 border-primary bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground hover:from-primary/30 hover:to-secondary/30 shadow-[0_0_30px_hsl(var(--primary)/0.4),0_0_60px_hsl(var(--secondary)/0.2)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6),0_0_80px_hsl(var(--secondary)/0.3)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
