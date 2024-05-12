import Image from "next/image";
import martin from "@/public/martin3.jpg";
export default function Header() {
  return (
    <div className="flex items-center mb-20">
      <Image
        alt="picture of me"
        src={martin}
        placeholder="blur"
        className="rounded-full size-16 object-cover"
        loading="lazy"
      />
      <div className="flex items-start flex-col ml-3">
        <h1 className="text-xl text font-bold tracking-tighter">
          hey, I&apos;m martin 🖐️
        </h1>
        <p className="text-neutral-400 font-mono">Front-End Developer</p>
      </div>
    </div>
  );
}
