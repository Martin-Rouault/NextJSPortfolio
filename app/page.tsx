import Header from "@/app/ui/home/header/header";
import About from "@/app/ui/home/about/about";
import LatestProjects from "@/app/ui/projects/projectLatest/projectLates";
import Contact from "@/app/ui/home/contact/contact";
import NavBar from "@/app/ui/nav/navBar";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <About />
        <LatestProjects />
        <Contact />
      </main>
      <NavBar />
    </>
  );
}
