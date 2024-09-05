"use client";

import Header from "@/components/component/home/header";
import About from "@/components/component/home/about";
import LatestProjects from "@/components/component/projects/projectLates";
import Contact from "@/components/component/home/contact";
import NavBar from "@/components/component/navBar";

import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <main className="animate-fade-in-down flex flex-col">
        <Header />
        <About />
        <LatestProjects headingLevel="h4" title="Latest Project" />
        <Contact />
        <a
          href="https://app.captainvegetal.fr/"
          target="_blank"
          className="gtm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => sendGTMEvent({ event: "buttonClicked", value: "xyz" })}
        >
          Send Event
        </a>
      </main>
      <NavBar />
    </>
  );
}
