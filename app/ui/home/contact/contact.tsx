import Github from "../../icons/github";
import Linkedin from "../../icons/linkedin";
import Mail from "../../icons/mail";

export default function Contact() {
  return (
    <footer className="mt-20">
      <h3 className="text-lg font-bold ">Contact</h3>
      <div className="flex flex-col mt-3">
        <ul className="space-y-3">
          <li>
            <a
              href=""
              className="no-underline hover:underline hover:underline-offset-2 flex gap-1 items-center"
            >
              <Linkedin />
              Linkedin
            </a>
          </li>
          <li>
            <a
              href=""
              className="no-underline hover:underline hover:underline-offset-2 flex gap-1 items-center"
            >
              <Github />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:martin.rlt24@gmail.com"
              className="no-underline hover:underline hover:underline-offset-2 flex gap-1 items-center"
            >
              <Mail />
              martin.rlt24@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
