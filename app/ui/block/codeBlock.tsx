export default function CodeBlock({ string }: { string: string }) {
  return (
    <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      {string}
    </span>
  );
}
