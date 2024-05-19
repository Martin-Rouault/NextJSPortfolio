import Heading from "../../block/heading";
import Github from "../../icons/github";
import Linkedin from "../../icons/linkedin";
import Mail from "../../icons/mail";

export default function Contact() {
  return (
    <footer className="mt-20">
      <Heading title="Contact" headingLevel="h5" />
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
