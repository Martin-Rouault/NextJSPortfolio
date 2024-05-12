import LatestProjects from "@/app/ui/projects/projectLatest/projectLates";
// import ProjectList from "@/app/ui/projects/projectList/projectList";
import Header from "@/app/ui/projects/header/header";
// import { fetchProject } from "../lib/data";

export default async function Page() {
  // const projects = await fetchProject();

  return (
    <>
      <article>
        <Header />
        <LatestProjects />
        {/* @ts-ignore */}
        {/* <ProjectList project={projects} /> */}
      </article>
    </>
  );
}
