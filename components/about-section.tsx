import { Sparkles, Layers, Zap, Building2, Check } from "lucide-react"
import { company } from "@/lib/products"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: "AI-First", label: "Product philosophy", icon: Sparkles },
  { value: "Enterprise", label: "Grade & scale", icon: Building2 },
  { value: "End-to-End", label: "Solution delivery", icon: Layers },
]

const highlights = [
  "Automated content ecosystems",
  "Unified enterprise AI platforms",
  "Secure, on-premise document intelligence",
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden border-y border-border/70 bg-secondary/30"
    >
      {/* ambient background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-drift absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-chart-3/10 blur-3xl [animation-delay:3s]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            About Diganta AI
          </span>

          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Built and backed by{" "}
            <span className="animate-gradient-text bg-gradient-to-r from-primary via-chart-3 to-primary bg-clip-text text-transparent">
              {company.parentName}
            </span>
          </h2>

          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
            Diganta AI brings together the Artificial Intelligence products developed by{" "}
            {company.parentName}. From automated content ecosystems and unified enterprise AI
            platforms to secure, on-premise document intelligence, our products are engineered
            to deliver measurable value in real-world, mission-critical environments.
          </p>

          <ul className="mt-7 flex flex-col gap-3">
            {highlights.map((item, i) => (
              <li
                key={item}
                className="group flex items-center gap-3 text-sm text-foreground"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={company.parentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Learn more about our AI development company
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.label} delay={i * 120}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  {/* accent bar that grows on hover */}
                  <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                        {s.value}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{s.label}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}

          <Reveal delay={360}>
            <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-foreground">
                One platform, purpose-built AI products, engineered for production.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
