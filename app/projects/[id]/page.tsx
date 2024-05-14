import { fetchProject, fetchProjectById } from "@/app/lib/data";
import ProjectSingle from "@/app/ui/projects/projectSingle/projectSingle";

export async function generateStaticParams() {
  const data = await fetchProject();
  return data.map((project) => ({ params: { id: project.id.toString() } }));
}

async function getProject(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await fetchProjectById(id);
  return data;
}

export default async function renderProject({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);
  return (
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
    />
  );
}
