"use client";

import Link from "next/link";
import data from "@/app/locales/data.json";
import ProjectSingle from "@/components/component/projects/projectSingle";
import { useParams } from "next/navigation";

export default function Single() {
  const { slug } = useParams();
  const projects = data.find((project) => project.slug === slug);
  return (
    <article className="animate-fade-in-down">
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
      {projects && <ProjectSingle project={projects} />}
    </article>
  );
}
