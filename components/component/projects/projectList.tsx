import Link from "next/link";
import { ProjectType } from "@/app/lib/defintion";
import Heading from "@/app/ui/block/heading";
import TextBlock from "@/app/ui/block/textBlock";

export default function ProjectList({ project }: { project: ProjectType[] }) {
  return (
    <div className="mt-20">
      <Heading headingLevel="h3">My projects</Heading>
      <div className="flex-col space-y-6 mt-6">
        {project.map((project) => (
          <Link href={`projects/${project.id}`} key={project.id}>
            <div className=" hover:dark:bg-accent hover:bg-accent rounded-lg -mx-4 p-4 transition-colors duration-200 ease-in-out">
              <p className="text-lg font-medium">
                {project.project_name.toLowerCase()}
              </p>
              <TextBlock>{project.small_description}</TextBlock>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
