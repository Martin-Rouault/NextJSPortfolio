import Link from "next/link";
import TextBlock from "@/app/ui/block/textBlock";
import Heading from "@/app/ui/block/heading";
import { LabType } from "@/app/lib/defintion";
import IframeBackground from "../iframeBackground";
import Line from "@/app/ui/block/line";

export default function LabSingle({ lab }: { lab: LabType }) {
  return (
    <>
      <article className="flex justify-between items-center mt-20">
        <Heading headingLevel="h1">{lab.project_name}</Heading>
        <Link
          href={lab.link}
          target="_blank"
          aria-label="website link"
          className="rounded-full transition-colors duration-200 ease-in-out hover:bg-neutral-300 dark:hover:bg-neutral-800 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      </article>
      <TextBlock className="mb-12">{lab.description}</TextBlock>
      {lab.iframe_src && <IframeBackground iframe_src={lab.iframe_src} />}
      <Line />
    </>
  );
}
