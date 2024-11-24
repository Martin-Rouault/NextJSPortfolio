"use client";

import Link from "next/link";
import labData from "@/app/locales/lab.json";
import LabSingle from "@/components/component/lab/labSingle";
import { useParams } from "next/navigation";

export default function Experimenation() {
  const { slug } = useParams();
  const labs = labData.find((lab) => lab.slug === slug);
  return (
    <article className="animate-fade-in-down">
      <Link href="/lab">
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
          <p className="text-sm">back to the lab</p>
        </button>
      </Link>
      {labs && <LabSingle lab={labs} />}
    </article>
  );
}
