"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogPostCard } from "@/components/blog-post-card";
import { CategoryBadge } from "@/components/category-badge";

function getCategoryDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    travel: "Exploring new places, cultures, and experiences around the world.",
    photography: "Capturing moments, light, and stories through the lens.",
    design:
      "Exploring principles, trends, and insights in the world of design.",
    lifestyle:
      "Thoughts on mindful living, productivity, and everyday experiences.",
    "everyday beauty":
      "Finding beauty in the simple, everyday things around us.",
  };

  return (
    descriptions[slug.toLowerCase()] || "Explore articles in this category."
  );
}

export default function CategorySlugPage({ slug }: { slug: string }) {
  const decodedSlug = decodeURIComponent(slug);

  // Format the category name properly (capitalize first letter of each word)
  const categoryName = decodedSlug
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Categories data
  const categories = ["Travel", "Design", "Lifestyle", "Everyday Beauty"];

  // Use useMemo to avoid recalculating on every render
  const categoryPosts = useMemo(() => {
    // Case-insensitive comparison with the decoded slug
    return blogPosts.filter(
      (post) => post.category.toLowerCase() === decodedSlug.toLowerCase()
    );
  }, [blogPosts, decodedSlug]);

  // Get all unique tags from this category's posts
  const categoryTags = useMemo(() => {
    return Array.from(
      new Set(categoryPosts.flatMap((post) => post.tags || []))
    );
  }, [categoryPosts]);

  // Filter posts based on search query and active tag
  const filteredPosts = useMemo(() => {
    let filtered = categoryPosts;

    // Filter by search query if present
    if (searchQuery) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by tag if active
    if (activeTag) {
      filtered = filtered.filter(
        (post) => post.tags && post.tags.includes(activeTag)
      );
    }

    return filtered;
  }, [categoryPosts, searchQuery, activeTag]);

  // Handle tag click
  const handleTagClick = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag(null); // Toggle off if clicking the same tag
    } else {
      setActiveTag(tag); // Set new tag as active
    }
  };
  return (
    <main className="min-h-screen bg-[#f8f8f6]">
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-6 pl-0 hover:pl-2 transition-all flex items-center gap-2 text-[#5b6084]"
            >
              <ArrowLeft size={18} />
              Back to all posts
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#2d3047] mb-4">
            {categoryName}
          </h1>
          <p className="text-lg text-[#5b6084] mb-8">
            {getCategoryDescription(decodedSlug)}
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5b6084]"
              size={18}
            />
            <Input
              placeholder={`Search ${categoryName} articles...`}
              className="pl-10 py-6 rounded-full border-[#e6e6e6] focus:border-[#2d3047] focus:ring-[#2d3047]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          <Link href="/blog">
            <CategoryBadge>All</CategoryBadge>
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${encodeURIComponent(category.toLowerCase())}`}
            >
              <CategoryBadge
                active={category.toLowerCase() === decodedSlug.toLowerCase()}
              >
                {category}
              </CategoryBadge>
            </Link>
          ))}
        </div>
      </section>

      {/* Tags Section */}
      {activeTag && (
        <section className="container mx-auto px-4 py-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-lg font-medium text-[#2d3047]">
                Active Tag:
              </h2>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#2d3047] bg-[#2d3047] text-white hover:bg-[#1a1c2e]"
                onClick={() => setActiveTag(null)}
              >
                #{activeTag} ✕
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-[#2d3047] mb-2">
              No posts found
            </h3>
            <p className="text-[#5b6084]">
              There are currently no posts matching your criteria. Try a
              different search term or tag.
            </p>
          </div>
        )}
      </section>

      {/* Tags Cloud */}
      {categoryTags.length > 0 && (
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-medium text-[#2d3047] mb-4">
              Popular Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {categoryTags.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  className={`rounded-full ${
                    activeTag === tag
                      ? "border-[#2d3047] bg-[#2d3047] text-white hover:bg-[#1a1c2e]"
                      : "border-[#d9d9d9] hover:border-[#2d3047] hover:bg-white text-[#5b6084]"
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  #{tag}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-[#2d3047] mb-4">
            Join the Newsletter
          </h2>
          <p className="text-[#5b6084] mb-8 max-w-lg mx-auto">
            Subscribe to get notified about new blog posts and receive
            occasional updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border border-[#e6e6e6] focus:outline-none focus:border-[#2d3047]"
            />
            <Button className="rounded-full bg-[#2d3047] hover:bg-[#1a1c2e] text-white px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

// Blog posts data - in a real app, this would be filtered from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Finding Beauty in Everyday Moments",
    excerpt:
      "How slowing down and observing the world around us can lead to unexpected moments of joy and inspiration in our daily lives.",
    category: "Lifestyle",
    date: "March 25, 2024",
    readTime: "5 min read",
    image: "/images/sunset-path.jpeg",
    tags: ["mindfulness", "beauty", "observation"],
  },
  {
    id: 2,
    title: "Kyoto Mornings: A Photographic Journey",
    excerpt:
      "Exploring the serene temples and quiet streets of Kyoto at dawn, capturing the tranquil beauty before the city awakens.",
    category: "Travel",
    date: "March 18, 2024",
    readTime: "8 min read",
    image: "/images/kyoto-neighborhood.jpeg",
    tags: ["travel", "photography", "japan"],
  },
  {
    id: 3,
    title: "The Principles of Wabi-Sabi in Modern Design",
    excerpt:
      "Understanding the Japanese aesthetic of finding beauty in imperfection and its application in contemporary interiors and products.",
    category: "Design",
    date: "March 11, 2024",
    readTime: "6 min read",
    image: "/images/japanese-room.jpeg",
    tags: ["design", "wabi-sabi", "interiors"],
  },
  {
    id: 4,
    title: "Chasing Light: The Golden Hour Project",
    excerpt:
      "A collection of photographs taken during the magical golden hours, exploring how light transforms ordinary scenes.",
    category: "Lifestyle",
    date: "March 04, 2024",
    readTime: "4 min read",
    image: "/images/sunset-path.jpeg",
    tags: ["photography", "light", "observation"],
  },
  {
    id: 5,
    title: "The Art of the Urban Sketch: Capturing City Life",
    excerpt:
      "Rediscovering the charm of cities through quick sketches and observations, finding stories hidden in plain sight.",
    category: "Lifestyle",
    date: "February 26, 2024",
    readTime: "7 min read",
    image: "/images/japanese-street.jpeg",
    tags: ["sketching", "urban", "creativity"],
  },
  {
    id: 6,
    title: "Lost in Lisbon: Textures and Tiles",
    excerpt:
      "A visual diary focusing on the intricate tilework (azulejos) and diverse textures found throughout Lisbon's historic neighborhoods.",
    category: "Travel",
    date: "February 19, 2024",
    readTime: "9 min read",
    image: "/images/lisbon-street.jpeg",
    tags: ["travel", "architecture", "portugal"],
  },
  {
    id: 7,
    title: "Minimalism Isn't Just White Walls: Finding Your Style",
    excerpt:
      "Exploring different facets of minimalist design beyond the stereotypes, focusing on intentionality and personal expression.",
    category: "Design",
    date: "February 12, 2024",
    readTime: "5 min read",
    image: "/images/cozy-living-room.jpeg",
    tags: ["design", "minimalism", "interiors"],
  },
  {
    id: 8,
    title: "Morning Coffee Rituals: A Moment of Calm",
    excerpt:
      "The simple act of preparing and savoring a morning coffee as a mindful practice and a source of quiet joy.",
    category: "Everyday Beauty",
    date: "February 05, 2024",
    readTime: "3 min read",
    image: "/images/morning-coffee.jpeg",
    tags: ["mindfulness", "rituals", "everyday"],
  },
];
