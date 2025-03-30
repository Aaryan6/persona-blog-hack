import { Badge } from "@/components/ui/badge";

interface ClientCardProps {
  name: string;
  description: string;
  tags: string[];
}

export function ClientCard({ name, description, tags }: ClientCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#e6e6e6] hover:shadow-md transition-all duration-300 h-full">
      <h3 className="text-xl font-medium mb-3 text-[#2d3047]">{name}</h3>
      <p className="text-[#5b6084] mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-[#f0f0f0] text-[#5b6084] hover:bg-[#e6e6e6] border-none"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
