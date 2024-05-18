import Image from "next/image";

export default function PictureBackground({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="flex justify-center items-center mt-3 rounded-md ">
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
