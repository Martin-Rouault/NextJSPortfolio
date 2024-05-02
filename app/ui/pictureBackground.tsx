import Image from "next/image";

export default function PictureBackground({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="flex justify-center items-center mt-3 bg-neutral-800 w-full h-96 rounded-md border-neutral-700 border-2 transition-colors duration-200 ease-in-out hover:border-neutral-500">
      <Image
        src={imageSrc}
        width={350}
        height={350}
        alt="Picture of the project"
        className="rounded-md"
      />
    </div>
  );
}
