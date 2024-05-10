import Link from "next/link";
import PictureBackground from "@/app/ui/pictureBackground/pictureBackground";
3;

export default function ProjectSingle({
  project_name,
  description,
  title_1,
  content_1,
  title_2,
  content_2,
  title_3,
  content_3,
  image_path,
}: {
  project_name: string;
  description: string;
  title_1: string;
  content_1: string;
  title_2: string;
  content_2: string;
  title_3: string;
  content_3: string;
  image_path: string;
}) {
  console.log({ image_path });

  return (
    <>
      <article>
        <Link href="/projects">
          <div className="flex items-center space-x-2">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <button className="text-sm">back to projects</button>
          </div>
        </Link>
        <div className="flex justify-between items-center mt-20 mb-3">
          <h5 className="text-xl font-semibold">{project_name}</h5>
          <a
            href="https://webstellar.io"
            target="_blank"
            className="rounded-full transition-colors duration-200 ease-in-out bg-neutral-900 hover:bg-neutral-800 p-2"
          >
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
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
        <p className="text-neutral-400 mb-12">{description}</p>
        {image_path && <PictureBackground imageSrc={image_path} />}
        <div className="mt-12 flex flex-col">
          <p className="text-lg mb-3 font-semibold">{title_1}</p>
          <p className="text-neutral-400 mb-6">{content_1}</p>
          <p className="text-lg mb-3 font-semibold">{title_2}</p>
          <p className="text-neutral-400 mb-6">{content_2}</p>
          <p className="text-lg mb-3 font-semibold">{title_3}</p>
          <p className="text-neutral-400">{content_3}</p>
        </div>
      </article>
    </>
  );
}
