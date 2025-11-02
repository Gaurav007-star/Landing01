import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";

const blog = [
  {
    title: "A 3-week journey to a validated MVP",
    blurb: "How I scoped, prototyped, and tested a finance tool in record time.",
  },
  {
    title: "Motion as a storytelling tool",
    blurb:
      "Principles I use to add meaning (not noise) with micro-interactions.",
  },
  {
    title: "My favorite Figma workflow",
    blurb: "Components, tokens and auto-layout patterns that scale.",
  },
];

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

function PlaceholderThumb({ label }) {
  return (
    <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 grid place-items-center overflow-hidden">
      <span className="text-zinc-500 text-sm">{label}</span>
    </div>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20">
      <div className={`${container} space-y-10`}>
        <SectionHeader
          title="Blog Update"
          desc="Stories and notes on process, craft and tools."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {blog.map((b) => (
            <Card key={b.title} className="rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <PlaceholderThumb label="Article Cover" />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-lg">{b.title}</CardTitle>
                <p className="text-zinc-600">{b.blurb}</p>
                <div className="pt-2">
                  <Button variant="ghost" className="px-0 hover:text-violet-700">
                    Read more <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
