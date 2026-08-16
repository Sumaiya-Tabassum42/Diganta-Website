import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function RefundPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh bg-gray-50 pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Refund Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="prose prose-lg mt-12 max-w-none text-gray-700">
            <p>
              Thank you for shopping at Diganta AI. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">1. General Policy</h2>
            <p>
              As with any shopping experience, there are terms and conditions that apply to transactions at Diganta AI. The main thing to remember is that by placing an order or making a purchase at Diganta AI, you agree to the terms set forth below along with Diganta AI’s Privacy Policy and Terms of Use.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">2. Digital Products</h2>
            <p>
              We do not issue refunds for digital products once the order is confirmed and the product is sent. We recommend contacting us for assistance if you experience any issues receiving or downloading our products.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">3. Contact Us</h2>
            <p>
              If you have any questions about our Refunds Policy, please contact us by visiting the contact page on our website.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}