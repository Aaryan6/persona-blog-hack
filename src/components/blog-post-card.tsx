import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <div className="bg-white rounded-3xl overflow-hidden border border-[#e6e6e6] hover:shadow-md transition-all duration-300 h-full flex flex-col">
        <div className="aspect-[4/3] relative">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-3">
            <Badge className="bg-[#f0f0f0] hover:bg-[#e6e6e6] text-[#5b6084] border-none">
              {post.category}
            </Badge>
            <div className="flex items-center text-xs text-[#5b6084]">
              <Clock size={12} className="mr-1" />
              {post.readTime}
            </div>
          </div>
          <h3 className="text-xl font-medium mb-3 text-[#2d3047] group-hover:text-[#5b6084] transition-colors">
            {post.title}
          </h3>
          <p className="text-[#5b6084] mb-4 flex-grow">{post.excerpt}</p>
          <div className="text-sm text-[#5b6084]">{post.date}</div>
        </div>
      </div>
    </Link>
  );
}
