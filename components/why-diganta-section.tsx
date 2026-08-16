import { ShieldCheck, Zap, Building2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    name: "Enterprise Grade",
    description: "Our solutions are built for scalability, reliability, and performance in demanding business environments.",
    icon: Building2,
  },
  {
    name: "Secure & Compliant",
    description: "With options for on-premise deployment, we prioritize data security and compliance with industry standards.",
    icon: ShieldCheck,
  },
  {
    name: "Innovative Solutions",
    description: "We leverage cutting-edge AI research to build products that solve real-world, complex problems.",
    icon: Zap,
  },
]

export function WhyDigantaSection() {
  return (
    <section className="border-t border-border/70 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Why Choose Diganta AI?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Our platform is more than just a collection of tools. It's a commitment to quality, security, and innovation.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.name} delay={i * 120}>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{feature.name}</h3>
                <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}