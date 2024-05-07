import Link from "next/link";
import ProjectButton from "@/app/ui/projects/projectButton/projectButton";

export default async function projectList({ project }) {
  return (
    <div className="flex flex-col justify-between mt-12 space-y-7">
      <ul className="space-y-6">
        {project.map((project) => (
          <li key={project.id}>
            <ProjectButton
              id={project.id}
              project_name={project.project_name}
            />
            <p className="text-neutral-400">{project.small_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
