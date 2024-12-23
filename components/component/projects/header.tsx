"use client";

import TextBlock from "@/app/ui/block/textBlock";

export default function Header() {
  return (
    <div className="mb-12">
      <h1 className="text-xl font-semibold tracking-tighter">Work</h1>
      <div className="flex items-center space-x-2">
        <TextBlock>
          Here are some of my projects.
        </TextBlock>
      </div>
    </div>
  );
}
