import LatestProjects from "@/components/component/projects/projectLates";
import ProjectList from "@/components/component/projects/projectList";
import Header from "@/components/component/projects/header";
import data from "@/app/locales/data.json";

export default function Page() {
  const projects = data;

  return (
    <>
      <div>
        <Header />
        <LatestProjects title="Latest Project" headingLevel="h2" />
        <ProjectList project={projects} />
      </div>
    </>
  );
}
