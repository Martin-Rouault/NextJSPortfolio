import PictureBackground from "@/app/ui/pictureBackground/pictureBackground";
import Link from "next/link";

export default function ProjectLatest() {
  return (
    <div className="mt-20">
      <h2 className="text-lg font-bold ">Latest project</h2>
      <div className="flex justify-between mt-3">
        <p className="text-base text-neutral-200">Here is my latest project.</p>
        <Link href="projects/1">
          <button className="text-neutral-200 text-base" aria-label="project">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </Link>
      </div>
      <PictureBackground imageSrc="/meteomojo.png" />
    </div>
  );
}
