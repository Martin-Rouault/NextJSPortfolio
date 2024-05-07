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
              Linkedin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href=""
              className="no-underline hover:underline hover:underline-offset-2 flex gap-1 items-center"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>  
            </a>
          </li>
          <li>
            <a
              href="mailto:martin.rlt24@gmail.com"
              className="no-underline hover:underline hover:underline-offset-2 flex gap-1 items-center"
            >
              martin.rlt24@gmail.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
