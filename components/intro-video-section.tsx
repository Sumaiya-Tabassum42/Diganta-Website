import { Reveal } from "@/components/reveal"

export function IntroVideoSection() {
  return (
    <section className="border-t border-border/70 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How Diganta AI Works
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Our platform integrates multiple AI capabilities to provide end-to-end solutions. Watch this short video to see how we turn complex data into actionable intelligence.
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={200}>
          <div className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
            {/* This assumes you have a video at public/videos/diganta-intro.mp4 */}
            <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover">
              <source src="https://res.cloudinary.com/dtppvn1sq/video/upload/v1786536451/diganta_hec3v8.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  )
}