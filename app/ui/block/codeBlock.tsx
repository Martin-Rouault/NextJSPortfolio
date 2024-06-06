export default function CodeBlock({ string }: { string: string }) {
  return (
    <span className="px-1 bg-accent text-primary border rounded-sm">
      {string}
    </span>
  );
}
