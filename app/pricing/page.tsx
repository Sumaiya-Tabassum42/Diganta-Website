import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Starter",
    price: "$49",
    priceSuffix: "/mo",
    description: "For individuals and small teams getting started with AI.",
    features: ["Access to 1 Product", "Basic AI models", "1000 credits/month", "Email support"],
    cta: "Get Started",
    ctaHref: "/contact?plan=starter",
  },
  {
    name: "Business",
    price: "$199",
    priceSuffix: "/mo",
    description: "For growing businesses that need more power and support.",
    features: ["Access to all Products", "Advanced AI models", "5000 credits/month", "Priority email support", "Team management (up to 5 users)"],
    cta: "Choose Business",
    ctaHref: "/contact?plan=business",
    isFeatured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "",
    description: "For large organizations with custom needs and security requirements.",
    features: ["Volume discounts", "On-premise deployment option", "Custom model development", "Dedicated account manager", "24/7 premium support"],
    cta: "Contact Sales",
    ctaHref: "/contact?plan=enterprise",
  },
]

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-6 py-16">
        <Reveal className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Flexible Pricing for Every Team</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that's right for you. All plans can be customized for your specific needs.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div className={`flex h-full flex-col rounded-2xl border p-8 ${tier.isFeatured ? 'border-primary shadow-2xl shadow-primary/10' : 'border-border'}`}>
                <h3 className="text-xl font-semibold tracking-tight">{tier.name}</h3>
                <p className="mt-2 text-muted-foreground">{tier.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.priceSuffix && <span className="text-muted-foreground">{tier.priceSuffix}</span>}
                </div>
                <ul className="mt-8 space-y-4 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={tier.ctaHref} className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg px-6 text-sm font-medium ${tier.isFeatured ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                  {tier.cta}
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