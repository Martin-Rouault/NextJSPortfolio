import LatestProjects from "@/components/component/projects/projectLates";
import ProjectList from "@/components/component/projects/projectList";
import Header from "@/components/component/projects/header";
import data from "@/app/locales/data.json";
import { CardVO } from "../ui/block/cardDemo";

export default function Page() {
  const projects = data;

  return (
    <>
      <div>
        <Header />
        <CardVO projects={projects} />
      </div>
    </>
  );
}
