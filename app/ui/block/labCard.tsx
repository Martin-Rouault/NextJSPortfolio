import { LabType } from "@/app/lib/defintion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

export function LabCard({ labs }: { labs: LabType[] }) {
  return (
    <>
      <section className="grid gap-6 sm:grid-cols-2">
        {labs.map((labs) => (
          <Link
            href={`/lab/${labs.slug}`}
            className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            key={labs.id}
          >
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src={`/${labs.image_path}`}
                alt="labs 1"
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{labs.project_name}</h3>
              </div>
              <div className="inline-flex items-center justify-center rounded-full bg-gray-100 p-2 text-neutral-900 dark:bg-neutral-900 dark:text-gray-50">
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
