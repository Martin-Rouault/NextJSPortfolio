export default function PictureBackground({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="flex justify-center items-center mt-3 bg-neutral-800 rounded-md border-neutral-700 border-2">
      <img
        src={imageSrc}
        width={1000}
        height={1000}
        alt="Picture of the project"
        className="rounded-md"
      />
    </div>
  );
}
