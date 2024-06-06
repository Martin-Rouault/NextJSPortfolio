import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function ButtonTw({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-red-600 dark:bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4", className
      )}
    >
      {children}
    </button>
  );
}
