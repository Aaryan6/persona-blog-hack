"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";

export default function CommentSection() {
  const [comment, setComment] = useState("");

  // Mock data for comments
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Alex Johnson",
      avatar: "AJ",
      content:
        "I'm grateful for my morning coffee ritual. It's a small thing, but it centers me and helps me prepare for the day ahead.",
      date: "2 hours ago",
    },
    {
      id: 2,
      author: "Sam Taylor",
      avatar: "ST",
      content:
        "Today I'm grateful for a good night's sleep. After weeks of insomnia, I finally slept through the night and feel refreshed.",
      date: "5 hours ago",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    // Add new comment to the list
    const newComment = {
      id: comments.length + 1,
      author: "You",
      avatar: "YO",
      content: comment,
      date: "Just now",
    };

    setComments([newComment, ...comments]);
    setComment("");
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Share your reflection..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[120px] border-gray-200 focus:border-gray-300"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2"
          >
            <Send className="h-4 w-4" />
            Post Reflection
          </Button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gray-100 text-gray-800">
                {comment.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-gray-900">{comment.author}</h4>
                <p className="text-xs text-gray-500">{comment.date}</p>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
