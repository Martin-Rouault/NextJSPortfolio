export default function CodeBlock({ string }: { string: string }) {
  return (
    <span className="px-1 bg-neutral-100 dark:bg-neutral-900 border rounded-sm">
      {string}
    </span>
  );
}
