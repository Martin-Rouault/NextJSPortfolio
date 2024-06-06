import { cn } from "@/lib/utils";

type TextBlockProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function TextBlock({ className, children }: TextBlockProps) {
  const TextBlock = "p";
  return (
    <TextBlock
      className={cn("text-muted-foreground/90 mt-2 leading-6 text-balance", className)}
    >
      {children}
    </TextBlock>
  );
}
