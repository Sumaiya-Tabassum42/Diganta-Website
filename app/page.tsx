import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SiteFooter } from "@/components/site-footer"
import { IntroVideoSection } from "@/components/intro-video-section"
import { ProductsSection } from "@/components/products-section"
import { HowToUseSection } from "@/components/how-to-use-section"
import { AboutSection } from "@/components/about-section"
import { WhyDigantaSection } from "@/components/why-diganta-section"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Diganta AI",
  "alternateName": "Mysoftheaven (BD) Ltd.",
  "url": "https://diganta.mysoftheaven.com/", // Replace with your production URL
  "logo": "https://res.cloudinary.com/dtppvn1sq/image/upload/v1786593118/Diganta_Logo_Favicon_wc2qjf.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+880-XXX-XXXXXX", // Add your phone number
    "contactType": "customer service",
    "areaServed": "BD",
    "availableLanguage": ["en", "bn"]
  },
  "sameAs": [
    "https://mysoftheaven.com/artificial-intelligence-development-company"
    // Add links to your social media profiles here
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dhaka",
    "addressCountry": "BD"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://diganta.mysoftheaven.com/", // Replace with your production URL
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://diganta.mysoftheaven.com/search?q={search_term_string}", // Replace with your search URL
    "query-input": "required name=search_term_string"
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <SiteHeader />
      <main className="min-h-dvh bg-background">
        <Hero />
        <WhyDigantaSection />
        <IntroVideoSection />
        <ProductsSection />
        <HowToUseSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  )
}
