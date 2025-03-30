import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MessageSquare } from "lucide-react";
import CommentSection from "@/components/comment-section";

type Params = Promise<{ id: string }>;

export default async function EntryPage({ params }: { params: Params }) {
  const { id } = await params;
  // Mock data for a single journal entry
  const entry = {
    id: Number.parseInt(id),
    title: "Finding Gratitude in the Small Things",
    prompt: "What is one thing you're grateful for today?",
    category: "Gratitude",
    tags: ["gratitude", "mindfulness", "daily-practice"],
    content: `
      <p>Today, I'm grateful for the warm sunshine on my face as I walked to work. It's easy to overlook these simple pleasures in the rush of daily life, but there's something magical about feeling the sun's gentle warmth on a crisp morning.</p>
      
      <p>I've been trying to practice more mindfulness lately, to really notice the small moments that bring joy. It's so easy to get caught up in the big goals and challenges that we forget to appreciate what's right in front of us.</p>
      
      <p>The practice of gratitude has been scientifically proven to improve mental health and overall well-being. When we consciously focus on things we're thankful for, our brains actually start to rewire themselves to notice the positive more often.</p>
      
      <p>I've found that starting my day by identifying just one thing I'm grateful for sets a positive tone for everything that follows. Some days it's something significant like a supportive relationship, but often it's these tiny moments - a perfect cup of coffee, a kind smile from a stranger, or today's sunshine breaking through the clouds.</p>
      
      <p>What are you grateful for today?</p>
    `,
    date: "March 8, 2024",
    emotion: "peaceful",
    image: "/placeholder.svg?height=600&width=1200",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button
                variant="ghost"
                className="flex items-center gap-2 pl-0 hover:pl-2 transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Journal
              </Button>
            </Link>
          </div>

          <article className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-[16/9] relative">
              <Image
                src={entry.image || "/placeholder.svg"}
                alt={entry.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-10 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="bg-gray-50 text-gray-700 hover:bg-gray-100"
                  >
                    {entry.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{entry.date}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {entry.title}
                </h1>

                <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6">
                  <blockquote className="italic text-gray-700">
                    &quot;{entry.prompt}&quot;
                  </blockquote>
                </div>
              </div>

              <div
                className="prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: entry.content }}
                key={`content-${entry.id}`}
              />

              <div className="flex flex-wrap gap-2 pt-4">
                {entry.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-12 bg-white rounded-xl shadow-sm p-6 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Reflect With Me
              </h2>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Add Your Reflection
              </Button>
            </div>

            <p className="text-gray-600 mb-8">
              What are you grateful for today? Share your thoughts and
              reflections below.
            </p>

            <CommentSection />
          </div>
        </div>
      </div>
    </div>
  );
}
