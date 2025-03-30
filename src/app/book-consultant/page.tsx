import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export default function BookConsultation() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center text-[#5b6084] hover:text-[#2d3047] mb-8"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to home
        </Link>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium text-[#2d3047] mb-4">
            Book a Consultation
          </h1>
          <p className="text-[#5b6084] mb-8">
            Fill out the form below to schedule a one-hour consulting meeting.
            I&apos;ll get back to you within 24 hours to confirm the details.
          </p>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#e6e6e6]">
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
                  placeholder="What would you like to discuss?"
                  className="rounded-lg border-[#e6e6e6] focus:border-[#2d3047] focus:ring-[#2d3047]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#2d3047]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Please provide some details about your project or questions"
                  className="min-h-[150px] rounded-lg border-[#e6e6e6] focus:border-[#2d3047] focus:ring-[#2d3047]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-[#2d3047]">
                  Preferred date
                </Label>
                <Input
                  id="date"
                  type="date"
                  className="rounded-lg border-[#e6e6e6] focus:border-[#2d3047] focus:ring-[#2d3047]"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-[#2d3047] hover:bg-[#1a1c2e] text-white py-6"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
