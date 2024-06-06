import CodeBlock from "@/app/ui/block/codeBlock";
import Heading from "@/app/ui/block/heading";
import TextBlock from "@/app/ui/block/textBlock";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <div className="flex flex-col space-y-1 mb-20">
        <Heading headingLevel="h2">About me</Heading>
        <TextBlock>
          Hi, I&apos;m Martin I love crafting cool and minimalist UIs with {""}
          <CodeBlock string="React" /> and <CodeBlock string="NextJS" />. I&apos;m passionate about interfaces,
          design and providing a great experience.
        </TextBlock>
      </div>
      <div className="flex flex-col space-y-1">
        <Heading headingLevel="h3">Now</Heading>
        <TextBlock>
          I&apos;m currently working on a few projects, leveling up my skills, and
          learning new things. I&apos;m also searching for a internship as web
          developer.
        </TextBlock>

        <TextBlock>
          In my free time, I like to read, play video games, and watch movies.
        </TextBlock>
      </div>
    </div>
  );
}
