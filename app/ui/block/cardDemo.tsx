import { Project } from "@/app/lib/defintion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

export function CardVO({ projects }: { projects: Project[] }) {
  return (
    <>
      <section className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            prefetch={false}
            key={project.id}
          >
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src={`/${project.image_path}`}
                alt="Project 1"
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium tracking-tighter">
                  {project.project_name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.small_description}
                </p>
              </div>
              <div className="inline-flex items-center justify-center rounded-full bg-gray-100 p-2 text-neutral-900 dark:bg-neutral-900 dark:text-gray-50">
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </section>
      <p className="text-sm text-center text-muted-foreground my-12">Nothing else more. For the moment.. &#x1F60E;</p>
    </>
  );
}
