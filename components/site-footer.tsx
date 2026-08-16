"use client"

import Image from "next/image"
import { Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { company, products } from "@/lib/products"
import { services } from "@/lib/services"
import { useState } from "react"

export function SiteFooter() {
  const [copied, setCopied] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(company.contactEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-slate-300 pt-16 pb-6">
      {/* Background Glows */}
      <div
        className="absolute -top-80 left-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-48 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-indigo-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Col 1: Brand Info & Social Media */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3">
                <a 
                  href={company.parentUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transition-opacity hover:opacity-90"
                >
                  {logoError ? (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700 font-bold text-white">
                      M
                    </div>
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/ek511pie/image/upload/v1786357059/Gemini_Generated_Image_eeirg1eeirg1eeir-removebg-preview_p2bph2.png"
                      alt={company.parentName}
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain"
                      onError={() => setLogoError(true)}
                    />
                  )}
                </a>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{company.description}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                Dhaka, Bangladesh
              </p>
              
              
            </div>

            {/* Col 2: Important Links */}
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                Important Links
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                <li><Link href="/" className="group flex items-center gap-2 transition-colors hover:text-white"><span className="text-emerald-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">►</span> Home</Link></li>
                <li><Link href="/products" className="group flex items-center gap-2 transition-colors hover:text-white"><span className="text-emerald-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">►</span> Products</Link></li>
                <li><Link href="/services" className="group flex items-center gap-2 transition-colors hover:text-white"><span className="text-emerald-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">►</span> Services</Link></li>
                <li><Link href="/about" className="group flex items-center gap-2 transition-colors hover:text-white"><span className="text-emerald-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">►</span> About</Link></li>
                <li><Link href="/contact" className="group flex items-center gap-2 transition-colors hover:text-white"><span className="text-emerald-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">►</span> Contact</Link></li>
                <li><Link href="/terms" className="group flex items-center gap-2 transition-colors hover:text-white"><span className="text-emerald-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">►</span> Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="group flex items-center gap-2 transition-colors hover:text-white"><span className="text-emerald-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">►</span> Privacy Policy</Link></li>
                <li><Link href="/refund-policy" className="group flex items-center gap-2 transition-colors hover:text-white"><span className="text-emerald-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">►</span> Refund Policy</Link></li>
              </ul>
            </div>

            {/* Follow Us Section */}
              <div className="mt-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Follow Us
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-full bg-slate-800 p-2.5 text-slate-400 transition-all hover:bg-slate-700 hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full bg-slate-800 p-2.5 text-slate-400 transition-all hover:bg-slate-700 hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="rounded-full bg-slate-800 p-2.5 text-slate-400 transition-all hover:bg-slate-700 hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="rounded-full bg-slate-800 p-2.5 text-slate-400 transition-all hover:bg-slate-700 hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            

            {/* Col 4: Contact Us */}
            <div className="lg:col-span-1">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                Contact Us
              </p>
              <div className="mt-4">
                <button
                  onClick={handleCopy}
                  className="group relative w-full rounded-lg border border-slate-700 bg-slate-800/80 p-3 text-left transition-colors hover:border-blue-500"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-slate-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{company.contactEmail}</p>
                      <p className="text-xs text-slate-500">
                        {copied ? "Copied to clipboard!" : "Click to copy"}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Partners Section */}
        <div className="mt-12">
          <div className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5 text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technical Partners:
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-300">
              <span className="text-blue-400">Mysoftheaven (BD) Ltd.</span>
              <span className="hidden text-slate-600 md:inline">|</span>
              <span className="text-emerald-400">Business Automation</span>
              
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 text-center pt-2">
          <p className="text-xs text-slate-500 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            &copy; {new Date().getFullYear()} {company.parentName}. All rights reserved.
            <span className="hidden sm:inline text-slate-400" aria-hidden="true">|</span>
            <span className="flex items-center gap-x-4">
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            </span>
          </p>
        </div>

      </div>
    </footer>
  )
}