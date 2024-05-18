import Link from "next/link";
import ProjectButton from "@/app/ui/projects/projectButton/projectButton";
import { Project } from "@/app/lib/defintion";

export default async function projectList({ project }: { project: Project[] }) {
  return (
    <div className="flex flex-col justify-between mt-20 space-y-7">
      <p className="text-lg font-medium">Other projects...</p>
      <ul className="space-y-5">
        {project.map((project) => (
          <li key={project.id}>
            <ProjectButton
              id={project.id}
              project_name={project.project_name}
            />
            <p className="text-[17px] mt-1 text-neutral-600 dark:text-neutral-400">{project.small_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
