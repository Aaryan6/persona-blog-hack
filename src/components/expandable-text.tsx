"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ExpandableTextProps {
  text: string;
  maxLength: number;
}

export function ExpandableText({ text, maxLength }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = text.length > maxLength;
  const displayText =
    shouldTruncate && !isExpanded ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="space-y-4">
      <p className="text-[#5b6084] leading-relaxed whitespace-pre-line">
        {displayText}
      </p>

      {shouldTruncate && (
        <Button
          variant="link"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-0 h-auto text-[#2d3047] font-medium hover:text-[#5b6084]"
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      )}
    </div>
  );
}
