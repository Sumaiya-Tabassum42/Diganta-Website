import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh bg-gray-50 pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="prose prose-lg mt-12 max-w-none text-gray-700">
            <p>
              Welcome to Diganta AI. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Diganta AI if you do not agree to all of the terms and conditions stated on this page.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">1. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, Diganta AI and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">2. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>Publishing any Website material in any other media.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li>Publicly performing and/or showing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-800">3. Your Content</h2>
            <p>
              In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Diganta AI a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}