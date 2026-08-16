import { services } from "@/lib/services"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-6 py-24 sm:py-32">
        <Reveal className="max-w-2xl text-center mx-auto">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            From strategy to implementation, we offer end-to-end AI services to empower your business.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.tagline}</p>
                <p className="mt-4 flex-grow text-sm text-foreground/80">{service.description}</p>
                <Link href={`/contact?service=${service.slug}`} className="mt-6 inline-block text-sm font-medium text-primary">
                  Inquire about this service &rarr;
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}