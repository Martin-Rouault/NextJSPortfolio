import { fetchProject, fetchingProjectById } from "@/app/lib/data";
import ProjectSingle from "@/components/component/projects/projectSingle";
import Link from "next/link";
import data from "@/app/locales/data.json";

export async function generateStaticParams() {
  const projects = data;
  return projects.map((project) => ({ params: { id: project.id.toString() } }));
}

async function getProject(id: string) {
  const data = await fetchingProjectById(id);
  return data;
}

export default async function renderProject({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);
  return (
    <article>
      <Link href="/projects">
        <button className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <p className="text-sm">back to all projects</p>
        </button>
      </Link>
      <ProjectSingle
        project_name={project.project_name}
        description={project.description}
        title_1={project.title_1}
        content_1={project.content_1}
        title_2={project.title_2}
        content_2={project.content_2}
        title_3={project.title_3}
        content_3={project.content_3}
        image_path={project.image_path}
        link={project.link}
      />
    </article>
  );
}
