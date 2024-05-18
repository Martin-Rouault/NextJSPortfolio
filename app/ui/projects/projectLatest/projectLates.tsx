import PictureBackground from "@/app/ui/pictureBackground/pictureBackground";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export function ButtonIcon() {
  return (
    <Button variant="ghost" size="icon">
      <ArrowRightIcon className="h-4 w-4" />
    </Button>
  );
}

export default function ProjectLatest() {
  return (
    <div className="mt-20">
      <div className="flex justify-between mt-3">
        <h2 className="text-lg font-medium">Latest project</h2>
        <Link href="projects/2">
          <ButtonIcon />
        </Link>
      </div>
      <PictureBackground imageSrc="/meteomojo.png" />
    </div>
  );
}
