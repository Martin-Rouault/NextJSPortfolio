import Link from "next/link";
import PictureBackground from "@/components/component/pictureBackground";
import TextBlock from "@/app/ui/block/textBlock";
import Heading from "@/app/ui/block/heading";
import { ProjectType } from "@/app/lib/defintion";
import Line from "@/app/ui/block/line";

export default function ProjectSingle({ project }: { project: ProjectType }) {
  return (
    <>
      <article className="flex justify-between items-center mt-20">
        <Heading headingLevel="h1">{project.project_name}</Heading>
        <Link
          href={project.link}
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

      <TextBlock className="mb-12">{project.description}</TextBlock>

      {project.image_path && (
        <PictureBackground imageSrc={`/${project.image_path}`} />
      )}
      <div className="mt-12 flex flex-col space-y-5">
        <article>
          <Heading headingLevel="h2">{project.title_1}</Heading>
          <TextBlock title={project.title_1}>{project.content_1}</TextBlock>
        </article>
        <article>
          <Heading headingLevel="h3">{project.title_2}</Heading>
          <TextBlock title={project.title_2}>{project.content_2}</TextBlock>
        </article>
        <article>
          <Heading headingLevel="h4">{project.title_3}</Heading>
          <TextBlock title={project.title_3}>{project.content_3}</TextBlock>
        </article>
      </div>
      <Line />
    </>
  );
}
