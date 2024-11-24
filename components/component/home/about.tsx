import Heading from "@/app/ui/block/heading";
import TextBlock from "@/app/ui/block/textBlock";

export default function About() {
  return (
    <div className="flex flex-col space-y-16">
      <div className="flex flex-col space-y-1">
        <Heading headingLevel="h2">About me</Heading>
        <TextBlock>
          Hi, I&apos;m Martin. I love minimalist design and creating smooth user
          experiences. Making things simple is my thing — sometimes too simple,
          but it works.
        </TextBlock>
      </div>
      <div className="flex flex-col space-y-1 ">
        <Heading headingLevel="h3">Now</Heading>
        <TextBlock className="">
          Leveling up skills and constantly learning new things.
        </TextBlock>

        <TextBlock>
          In my free time, you’ll find me reading, playing video games, or
          watching movies — and yes, there are always candies involved.
        </TextBlock>
      </div>
    </div>
  );
}
