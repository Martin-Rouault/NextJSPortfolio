import CodeBlock from "../../block/codeBlock";
import TextBlock from "../../block/textBlock";

export default function About() {
  return (
    <>
      <div>
        <h2 className="text-lg font-medium">About me</h2>
        <p className="text-[17px] mt-3 text-neutral-600 dark:text-neutral-400 leading-7">
          I love crafting cool and minimalist UIs with
          <CodeBlock string="React" />. I&apos;m passionate about interfaces,
          design and providing a great experience.
        </p>
      </div>
      <div className="mt-20">
        <TextBlock
          title="Now"
          text="I'm currently working on a few projects, leveling up my skills,
          and learning new things. I'm also searching for a internship as
          web developer."
          headingLevel="h3"
        />
        <p className="mt-2 text-[17px] text-neutral-600 dark:text-neutral-400">
          If you&apos;d like give me a opportunity, feel free to send me an
          email.
        </p>
      </div>
    </>
  );
}
