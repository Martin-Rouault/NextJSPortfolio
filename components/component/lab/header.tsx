"use client";

import TextBlock from "@/app/ui/block/textBlock";

export default function Header() {
  return (
    <div className="mb-12">
      <h1 className="text-xl font-semibold tracking-tighter">Lab</h1>
      <div className="flex items-center space-x-2">
        <TextBlock>
          Space for exploring, experimenting, and occasionally breaking things.
        </TextBlock>
      </div>
    </div>
  );
}
