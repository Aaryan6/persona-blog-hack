import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f8f8f6]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#2d3047] mb-6">
            Get in Touch
          </h1>

          <p className="text-[#5b6084] mb-10 text-lg">
            Have a question, comment, or just want to say hello? I&apos;d love
            to hear from you. Fill out the form below or reach out through one
            of my social channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="mailto:aaryanpatel6211120@gmail.com">
              <div className="bg-white rounded-3xl p-6 border border-[#e6e6e6] hover:shadow-md transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                <Mail size={24} className="text-[#2d3047] mb-3" />
                <h3 className="font-medium text-[#2d3047] mb-1">Email</h3>
                <p className="text-[#5b6084] text-sm">
                  aaryanpatel6211120@gmail.com
                </p>
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/aaryanpatel6/"
              target="_blank"
            >
              <div className="bg-white rounded-3xl p-6 border border-[#e6e6e6] hover:shadow-md transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                <Linkedin size={24} className="text-[#2d3047] mb-3" />
                <h3 className="font-medium text-[#2d3047] mb-1">LinkedIn</h3>
                <p className="text-[#5b6084] text-sm">Connect with me</p>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#e6e6e6]">
            <h2 className="text-2xl font-medium text-[#2d3047] mb-6">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#2d3047]">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="rounded-lg border-[#e6e6e6] focus:border-[#2d3047] focus:ring-[#2d3047]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#2d3047]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="rounded-lg border-[#e6e6e6] focus:border-[#2d3047] focus:ring-[#2d3047]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-[#2d3047]">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  className="rounded-lg border-[#e6e6e6] focus:border-[#2d3047] focus:ring-[#2d3047]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#2d3047]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px] rounded-lg border-[#e6e6e6] focus:border-[#2d3047] focus:ring-[#2d3047]"
                />
              </div>

              <Button
                type="submit"
                className="rounded-full bg-[#2d3047] hover:bg-[#1a1c2e] text-white px-8"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
