import type React from "react";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  children: React.ReactNode;
  active?: boolean;
}

export function CategoryBadge({
  children,
  active = false,
}: CategoryBadgeProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 rounded-full text-sm transition-colors cursor-pointer",
        active
          ? "bg-[#2d3047] text-white"
          : "bg-white border border-[#e6e6e6] text-[#5b6084] hover:border-[#2d3047]"
      )}
    >
      {children}
    </div>
  );
}
