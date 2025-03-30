import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPostCard } from "@/components/blog-post-card";
import { FeaturedPostCard } from "@/components/featured-post-card";
import { CategoryBadge } from "@/components/category-badge";

export default function Home() {
  // Categories data
  const categories = ["Travel", "Design", "Lifestyle", "Everyday Beauty"];

  // Blog posts data
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
      featured: true,
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
      featured: false,
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
      featured: false,
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
      featured: false,
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
      featured: false,
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
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8f8f6]">
      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2d3047] mb-4">
                  Aaryan Patel
                </h1>
                <p className="text-lg md:text-xl text-[#5b6084] max-w-xl">
                  A collection of thoughts, photography, and stories about
                  design, travel, and finding beauty in everyday moments.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="mailto:aaryanpatel6211120@gmail.com">
                  <Button
                    variant="outline"
                    className="rounded-full border-[#d9d9d9] hover:border-[#2d3047] hover:bg-white text-[#2d3047] gap-2"
                  >
                    <Mail size={18} />
                    Email
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aaryanpatel6/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="rounded-full border-[#d9d9d9] hover:border-[#2d3047] hover:bg-white text-[#2d3047] gap-2"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://x.com/aaryanpatel_06" target="_blank">
                  <Button
                    variant="outline"
                    className="rounded-full border-[#d9d9d9] hover:border-[#2d3047] hover:bg-white text-[#2d3047] gap-2"
                  >
                    <Twitter size={18} />
                    Twitter
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="aspect-square relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/profile-image.png"
                  alt="Aaryan Patel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            <Link href="/blog">
              <CategoryBadge active>All</CategoryBadge>
            </Link>
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/category/${encodeURIComponent(category.toLowerCase())}`}
              >
                <CategoryBadge>{category}</CategoryBadge>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="container mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-medium text-[#2d3047] mb-8">
              Featured Post
            </h2>
            <FeaturedPostCard post={featuredPost} />
          </section>
        )}

        {/* Recent Posts */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-[#2d3047]">
              Recent Posts
            </h2>
            <Link href="/blog">
              <Button
                variant="ghost"
                className="text-[#2d3047] hover:text-[#5b6084] gap-2 group"
              >
                View all posts
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

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

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 border-t border-[#e6e6e6] mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#5b6084]">
              © {new Date().getFullYear()} Aaryan Patel. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="/about"
                className="text-sm text-[#5b6084] hover:text-[#2d3047]"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-[#5b6084] hover:text-[#2d3047]"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-[#5b6084] hover:text-[#2d3047]"
              >
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
