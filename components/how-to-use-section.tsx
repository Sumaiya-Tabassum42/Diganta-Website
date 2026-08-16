"use client"

import { useState } from "react"
import { PlayCircle, Bot, Newspaper, Files } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { products } from "@/lib/products"
import Link from "next/link"

// Map products to the structure needed for this component
const demos = products.map(p => ({ id: p.id, name: p.name, description: p.description, videoUrl: p.introVideo, slug: p.slug, icon: p.id === 'zentix' ? Newspaper : p.id === 'progga' ? Bot : Files }))

export function HowToUseSection() {
  const [activeTab, setActiveTab] = useState(demos[0].id)
  const activeDemo = demos.find((d) => d.id === activeTab)

  return (
    <section id="how-to-use" className="border-y border-border/70 bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl text-center mx-auto">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            See Our Products in Action
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Watch a short demo to understand how our AI products can solve real-world problems.
            Click a product tab to see its interface and launch the demo.
          </p>
        </Reveal>

        <div className="mt-12">
          <div className="flex justify-center border-b border-border">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveTab(demo.id)}
                className={`-mb-px flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === demo.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                <demo.icon className="h-4 w-4" />
                {demo.name}
              </button>
            ))}
          </div>

          <Reveal key={activeTab} className="mt-8">
            {activeDemo && (
              <div className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
                <video key={activeDemo.videoUrl} controls preload="metadata" className="w-full h-full object-cover">
                  <source src={activeDemo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Link href={`/products/${activeDemo.slug}`} className="absolute bottom-4 right-4 rounded-lg bg-primary/80 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary">
                  Learn more about {activeDemo.name} &rarr;
                </Link>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}