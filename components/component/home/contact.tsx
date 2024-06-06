import Heading from "@/app/ui/block/heading";
import Github from "@/app/icons/github";
import Linkedin from "@/app/icons/linkedin";
import Mail from "@/app/icons/mail";

export default function Contact() {
  return (
    <footer className="mt-20">
      <Heading headingLevel="h5">Contact</Heading>
      <div className="flex flex-col mt-3">
        <ul className="space-y-3">
          <Linkedin />
          <Github />
          <Mail />
        </ul>
      </div>
    </footer>
  );
}
