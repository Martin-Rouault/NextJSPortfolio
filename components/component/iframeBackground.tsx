export default function IframeBackground({
  iframe_src,
}: {
  iframe_src: string;
}) {
  return (
    <div className="mt-3 border border-gray-200 p-4 dark:border-neutral-800 dark:bg-neutral-900 rounded-md ">
      <iframe
        src={iframe_src}
        className="rounded-md w-full"
        height={400}
      ></iframe>
    </div>
  );
}
