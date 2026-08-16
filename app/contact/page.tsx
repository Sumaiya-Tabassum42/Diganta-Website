import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { company } from "@/lib/products"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-6 py-16">
        <Reveal className="max-w-2xl text-center mx-auto">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.
          </p>
        </Reveal>

        <div className="mt-16 max-w-4xl mx-auto">
          <Reveal delay={200}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">Send us a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}