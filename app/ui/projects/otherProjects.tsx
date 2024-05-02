import Link from "next/link";

export default function OtherProjects() {
  return (
    <>
      <div className="flex flex-col justify-between mt-12 space-y-7">
        <ul className="space-y-6">
          <li>
            <Link
              href="projects/singleProject"
              className="no-underline hover:underline hover:underline-offset-2"
            >
              WebStellar
            </Link>
            <p className="text-neutral-400">A cool space site.</p>
          </li>
          <li>
            <Link
              href=""
              className="no-underline hover:underline hover:underline-offset-2"
            >
              MeteoMojo
            </Link>
            <p className="text-neutral-400">A simple and minimalistic weather app.</p>
          </li>
        </ul>
      </div>
    </>
  );
}