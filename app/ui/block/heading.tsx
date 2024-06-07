import React from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function Heading({
  headingLevel,
  className,
  children,
}: HeadingProps) {
  const Heading = headingLevel;
  return (
    <Heading
      className={cn(
        "scroll-m-20 mb-2 text-xl font-medium tracking-tighter",
        className
      )}
    >
      {children}
    </Heading>
  );
}
