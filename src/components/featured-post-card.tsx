import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

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

interface FeaturedPostCardProps {
  post: BlogPost;
}

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <div className="bg-white rounded-3xl overflow-hidden border border-[#e6e6e6] hover:shadow-md transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto relative">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-[#f0f0f0] hover:bg-[#e6e6e6] text-[#5b6084] border-none">
                {post.category}
              </Badge>
              <div className="flex items-center text-xs text-[#5b6084]">
                <Clock size={12} className="mr-1" />
                {post.readTime}
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-4 text-[#2d3047] group-hover:text-[#5b6084] transition-colors">
              {post.title}
            </h3>
            <p className="text-[#5b6084] mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#5b6084]">{post.date}</span>
              <span className="text-[#2d3047] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                Read more <ArrowRight size={16} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
