import Heading from "@/app/ui/block/heading";
import PictureBackground from "@/components/component/pictureBackground";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function ButtonIcon() {
  return (
    <Button variant="ghost" size="icon" aria-label="button">
      <ArrowRightIcon className="h-4 w-4" />
    </Button>
  );
}

export default function ProjectLatest({
  title,
  headingLevel = "h1",
}: {
  title: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}) {
  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <Heading headingLevel={headingLevel}>
          {title}
        </Heading>
        <Link href="projects/o-weather">
          <ButtonIcon />
        </Link>
      </div>
      <PictureBackground imageSrc="/meteomojo.png" />
    </div>
  );
}
