import Header from "@/components/component/home/header";
import About from "@/components/component/home/about";
import LatestProjects from "@/components/component/projects/projectLates";
import Contact from "@/components/component/home/contact";
import NavBar from "@/components/component/navBar";

export default function Home() {
  return (
    <>
      <main className="animate-fade-in-down flex flex-col">
        <Header />
        <About />
        <LatestProjects headingLevel="h4" title="Latest Project" />
        <Contact />
      </main>
      <NavBar />
    </>
  );
}
