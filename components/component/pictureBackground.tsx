import Image from "next/image";

export default function PictureBackground({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="mt-3 border border-gray-200 p-4 dark:border-neutral-800 dark:bg-neutral-900 rounded-md ">
      <Image
        src={imageSrc}
        width={1000}
        height={1000}
        alt="Picture of the project"
        className="rounded-md"
        priority={true}
      />
    </div>
  );
}
