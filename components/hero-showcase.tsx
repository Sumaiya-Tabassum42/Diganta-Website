"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const previews = [
  { src: "/hero/preview-zentix.png", name: "Zentix", label: "Content Intelligence" },
  { src: "/hero/preview-progga.png", name: "Progga", label: "Enterprise AI Platform" },
  { src: "/hero/preview-docnexus.png", name: "DocNexus", label: "Document Intelligence" },
]

export function HeroShowcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % previews.length)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[460px]">
      {/* soft glow behind the stack */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      {previews.map((p, i) => {
        const offset = (i - active + previews.length) % previews.length
        // offset 0 = front, 1 = middle, 2 = back
        const styles = [
          "z-30 translate-x-0 translate-y-0 scale-100 opacity-100",
          "z-20 translate-x-8 translate-y-6 scale-[0.92] opacity-70",
          "z-10 -translate-x-8 translate-y-12 scale-[0.84] opacity-40",
        ][offset]

        return (
          <div
            key={p.src}
            className={`absolute w-[88%] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${styles}`}
          >
            {/* faux browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-chart-3/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
              <span className="ml-3 truncate font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {p.name} — {p.label}
              </span>
            </div>
            <div className="relative aspect-[16/11]">
              <Image
                src={p.src || "/placeholder.svg"}
                alt={`${p.name} product preview`}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          </div>
        )
      })}

      {/* dot indicators */}
      <div className="absolute -bottom-2 left-1/2 z-40 flex -translate-x-1/2 gap-2">
        {previews.map((p, i) => (
          <button
            key={p.src}
            type="button"
            aria-label={`Show ${p.name} preview`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
