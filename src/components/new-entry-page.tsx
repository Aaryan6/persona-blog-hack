"use client";

import type React from "react";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Dices, Frown, Meh, Smile, X } from "lucide-react";

export default function NewEntryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptParam = searchParams.get("prompt");

  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState(promptParam || "");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [emotion, setEmotion] = useState("neutral");

  // Update prompt if URL parameter changes
  useEffect(() => {
    if (promptParam) {
      setPrompt(promptParam);
    }
  }, [promptParam]);

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirect to the home page
    router.push("/");
  };

  // Mock data for random prompts
  const randomPrompts = [
    "What is one thing you're grateful for today?",
    "What is a challenge you are currently facing, and how are you working to overcome it?",
    "What is a skill you'd like to learn?",
    "What is something you've accomplished recently that you're proud of?",
    "What is a mistake you've made that taught you an important lesson?",
  ];

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * randomPrompts.length);
    return randomPrompts[randomIndex];
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
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

        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-primary">
            New Reflection
          </h1>
          <p className="text-muted-foreground mt-1">
            Capture your thoughts and insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-3">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Give your reflection a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="prompt">Reflection Prompt</Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setPrompt(getRandomPrompt())}
                className="flex items-center gap-1 text-xs"
              >
                <Dices className="h-3 w-3" />
                Random Prompt
              </Button>
            </div>
            <Textarea
              id="prompt"
              placeholder="What question or prompt are you reflecting on?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[80px]"
              required
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="content">Your Reflection</Label>
            <Textarea
              id="content"
              placeholder="Write your thoughts, insights, and reflections here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px]"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-3">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gratitude">Gratitude</SelectItem>
                  <SelectItem value="personal-growth">
                    Personal Growth
                  </SelectItem>
                  <SelectItem value="challenges">Challenges</SelectItem>
                  <SelectItem value="relationships">Relationships</SelectItem>
                  <SelectItem value="goals">Goals</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="emotion">How are you feeling?</Label>
              <div className="flex gap-4">
                <Card
                  className={`flex-1 cursor-pointer hover:border-primary transition-colors ${
                    emotion === "happy"
                      ? "border-primary bg-primary/5"
                      : "border-muted"
                  }`}
                  onClick={() => setEmotion("happy")}
                >
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Smile
                      className={`h-8 w-8 mb-1 ${
                        emotion === "happy"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span className="text-sm">Happy</span>
                  </CardContent>
                </Card>

                <Card
                  className={`flex-1 cursor-pointer hover:border-primary transition-colors ${
                    emotion === "neutral"
                      ? "border-primary bg-primary/5"
                      : "border-muted"
                  }`}
                  onClick={() => setEmotion("neutral")}
                >
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Meh
                      className={`h-8 w-8 mb-1 ${
                        emotion === "neutral"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span className="text-sm">Neutral</span>
                  </CardContent>
                </Card>

                <Card
                  className={`flex-1 cursor-pointer hover:border-primary transition-colors ${
                    emotion === "sad"
                      ? "border-primary bg-primary/5"
                      : "border-muted"
                  }`}
                  onClick={() => setEmotion("sad")}
                >
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Frown
                      className={`h-8 w-8 mb-1 ${
                        emotion === "sad"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span className="text-sm">Sad</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex gap-2">
              <Input
                id="tags"
                placeholder="Add tags (press Enter)"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button type="button" onClick={handleAddTag} variant="outline">
                Add
              </Button>
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="rounded-full hover:bg-muted-foreground/20 p-0.5"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {tag}</span>
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/")}
            >
              Cancel
            </Button>
            <Button type="submit">Save Reflection</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
