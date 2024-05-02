import Link from "next/link";
import PictureBackground from "@/app/ui/pictureBackground";

export default function SingleProjectPage() {
  return (
    <>
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
        <h5 className="text-lg font-semibold">WebStellar</h5>
        <a href="https://webstellar.io" target="_blank" className="rounded-full transition-colors duration-200 ease-in-out bg-neutral-900 hover:bg-neutral-800 p-2">
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
      <p className="text-neutral-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
        laboriosam at dolorem libero blanditiis nemo cum tempora quis delectus?
        Dolore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        odit labore quo. Quasi, iusto excepturi. Laudantium facilis tempore
        maxime temporibus.
      </p>
      <PictureBackground imageSrc="/webstellar.png" />
      <div className="mt-12 flex flex-col space-y-3">
        <p>Blog</p>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          laboriosam at dolorem libero blanditiis nemo cum tempora quis
          delectus? Dolore?Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Facilis odit labore quo. Quasi, iusto excepturi. Laudantium
          facilis tempore maxime temporibus.
        </p>
        <p>Exploration</p>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          laboriosam at dolorem libero blanditiis nemo cum tempora quis
          delectus? Dolore?Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Facilis odit labore quo. Quasi, iusto excepturi. Laudantium
          facilis tempore maxime temporibus.
        </p>
        <p>Evenements</p>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          laboriosam at dolorem libero blanditiis nemo cum tempora quis
          delectus? Dolore?Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Facilis odit labore quo. Quasi, iusto excepturi. Laudantium
          facilis tempore maxime temporibus.
        </p>
      </div>
    </>
  );
}
