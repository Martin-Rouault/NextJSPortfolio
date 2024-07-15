import { cn } from "@/lib/utils";

type TextBlockProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function TextBlock({ className, children }: TextBlockProps) {
  const TextBlock = "p";
  return (
    <article className="">
      <TextBlock className={cn("text-muted-foreground text-[1.04rem] leading-relaxed", className)}>
        {children}
      </TextBlock>
    </article>
  );
}
