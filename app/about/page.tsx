import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutSection } from "@/components/about-section"
import { Reveal } from "@/components/reveal"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-6 py-24 sm:py-32">
        <Reveal>
          <section className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              About Diganta AI
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The home for our Artificial Intelligence products, built and backed by Mysoftheaven (BD) Ltd.
            </p>
          </section>
        </Reveal>
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  )
}