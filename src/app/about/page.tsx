import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-[#f8f8f6]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#2d3047] mb-8">
            About Me
          </h1>

          <div className="aspect-[16/9] relative rounded-3xl overflow-hidden mb-10">
            <Image
              src="/profile-image.png"
              alt="About Aaryan Patel"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-[#2d3047] prose-headings:font-medium prose-p:text-[#5b6084] mb-12">
            <p>
              Hello, I&apos;m Aaryan Patel, a designer, photographer, and writer
              based in Stockholm, Sweden. This blog is my digital garden—a space
              where I share my thoughts, creative explorations, and observations
              about design, travel, and finding beauty in everyday moments.
            </p>

            <h2>My Background</h2>

            <p>
              With over 15 years of experience in design, I&apos;ve worked
              across various disciplines including branding, digital product
              design, and creative direction. My professional journey has taken
              me from small design studios to global tech companies, giving me a
              diverse perspective on the creative industry.
            </p>

            <p>
              Outside of my design work, I&apos;m passionate about photography,
              minimalist living, and exploring new places. I believe in the
              power of observation and reflection to enhance our understanding
              of the world and fuel our creative endeavors.
            </p>

            <h2>About This Blog</h2>

            <p>
              This blog is a personal project that allows me to explore ideas
              beyond my professional work. Here, you&apos;ll find:
            </p>

            <ul>
              <li>
                Reflections on design principles and their application in
                everyday life
              </li>
              <li>Photo essays from my travels and explorations</li>
              <li>Thoughts on creativity, productivity, and mindfulness</li>
              <li>
                Occasional tutorials and insights from my professional
                experience
              </li>
            </ul>

            <p>
              My goal is to create content that inspires curiosity, encourages
              thoughtful observation, and celebrates the beauty that can be
              found in both extraordinary and ordinary moments.
            </p>

            <h2>Let&apos;s Connect</h2>

            <p>
              I love connecting with like-minded individuals who share my
              interests in design, photography, and thoughtful living. Feel free
              to reach out via email or social media—I&apos;m always open to
              conversations, collaborations, or simply exchanging ideas.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#e6e6e6] text-center mb-12">
            <h3 className="text-xl font-medium text-[#2d3047] mb-3">
              Get in Touch
            </h3>
            <p className="text-[#5b6084] mb-6">
              Have a question or just want to say hello? I&apos;d love to hear
              from you.
            </p>
            <Link href="mailto:aaryanpatel6211120@gmail.com">
              <Button className="rounded-full bg-[#2d3047] hover:bg-[#1a1c2e] text-white gap-2">
                <Mail size={18} />
                Send me an email
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
