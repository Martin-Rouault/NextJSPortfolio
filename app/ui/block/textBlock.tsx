import Heading from "./heading";

export default function TextBlock({
  title,
  text,
  headingLevel = "p",
  className,
}: {
  title?: string;
  text: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}) {
  return (
    <div>
      <Heading title={title} headingLevel={headingLevel} />
      <p className={`text-[17px] mt-3 text-neutral-600 dark:text-neutral-400 leading-7 ${className}`}>
        {text}
      </p>
    </div>
  );
}
