"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SunIcon, FlowerIcon, CameraIcon } from "@/components/doodle-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  illustration: string;
  link: string;
}

export function ServiceCard({
  title,
  description,
  illustration,
  link,
}: ServiceCardProps) {
  const getIllustration = () => {
    switch (illustration) {
      case "sun":
        return <SunIcon className="w-12 h-12 text-[#2d3047]" />;
      case "flower":
        return <FlowerIcon className="w-12 h-12 text-[#2d3047]" />;
      case "camera":
        return <CameraIcon className="w-12 h-12 text-[#2d3047]" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#e6e6e6] hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      <h3 className="text-xl font-medium mb-3 text-[#2d3047] group-hover:bg-gradient-to-r group-hover:from-[#2d3047] group-hover:to-[#5b6084] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
        {title}
      </h3>
      <p className="text-[#5b6084] mb-6 flex-grow">{description}</p>
      <div className="flex justify-between items-end mt-4">
        <div className="opacity-70 group-hover:opacity-100 transition-opacity">
          {getIllustration()}
        </div>
        <Link href={link}>
          <Button
            variant="outline"
            className="rounded-full border-[#d9d9d9] hover:border-[#2d3047] hover:bg-white text-[#2d3047]"
          >
            Book now
          </Button>
        </Link>
      </div>
    </div>
  );
}
