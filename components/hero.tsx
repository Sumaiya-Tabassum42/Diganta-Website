import { company } from "@/lib/products"
import { HeroCarousel } from "@/components/hero-carousel"
import { HeroShowcase } from "@/components/hero-showcase"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      {/* rotating image backdrop */}
      <HeroCarousel />

      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.92 0.01 255) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.92 0.01 255) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <span
            className="hero-enter inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            A Mysoftheaven Platform
          </span>

          <h1
            className="hero-enter mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            Where our{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-primary via-chart-3 to-primary bg-clip-text text-transparent">
              Artificial Intelligence
            </span>{" "}
            products come together
          </h1>

          <p
            className="hero-enter mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0"
            style={{ animationDelay: "240ms" }}
          >
            {company.description}
          </p>

          <div
            className="hero-enter mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              href="/products"
              className="shimmer-hover inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 sm:w-auto"
            >
              Explore our products
            </Link>
            <a
              href={company.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary sm:w-auto"
            >
              About Mysoftheaven
            </a>
          </div>

          <p
            className="hero-enter mt-10 font-mono text-xs uppercase tracking-wider text-muted-foreground"
            style={{ animationDelay: "480ms" }}
          >
            Our products, and growing
          </p>
        </div>

        {/* Right: animated product showcase */}
        <div className="hero-enter" style={{ animationDelay: "300ms" }}>
          <div className="animate-float-slow">
            <HeroShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
