export default function TextBlock({
  title,
  text,
  headingLevel = "p" // Default value
}: {
  title: string;
  text: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"; // Optional, by default is "p" tag
}) {
    const Heading = headingLevel;
  return (
    <div>
      <Heading className="text-lg font-medium">{title}</Heading>
      <p className="text-[17px] mt-3 text-neutral-600 dark:text-neutral-400 leading-7">
        {text}
      </p>
    </div>
  );
}
