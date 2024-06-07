import { cn } from "@/lib/utils";

type TextBlockProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function TextBlock({ className, children }: TextBlockProps) {
  const TextBlock = "p";
  return (
    <article className="prose dark:prose-invert">
      <TextBlock className={cn("text-primary leading-6", className)}>
        {children}
      </TextBlock>
    </article>
  );
}
