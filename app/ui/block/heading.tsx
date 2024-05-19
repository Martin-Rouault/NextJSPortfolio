export default function Heading({
  title,
  headingLevel = "p", // Default value
}: {
  title?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"; // Optional, by default is "p" tag
}) {
  const Heading = headingLevel;
  return <Heading className="text-lg font-medium">{title}</Heading>;
}
