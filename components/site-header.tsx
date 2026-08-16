"use client"

import Link from "next/link"
import Image, { type ImageProps } from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { company } from "@/lib/products"
import { useState, useEffect } from "react"

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://res.cloudinary.com/dtppvn1sq/image/upload/v1786593118/Diganta_Logo_Favicon_wc2qjf.png"
        alt={company.name}
        width={40}
        height={40}
        priority
        className="h-10 w-10"
      />
      <span className="text-xl font-semibold text-header-fg">Diganta AI</span>
    </div>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // close mobile nav on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // prevent scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-6 w-6 text-header-fg" />
      </button>
      {isOpen && (
        // Overlay
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-header-bg p-6 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6 text-header-fg" />
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-6 text-lg font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <div className="relative">
      <Link
        href={href}
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
          isActive
            ? "font-bold text-blue-700"
            : "font-medium text-slate-900 hover:font-semibold hover:text-blue-600"
        }`}
      >
        {children}
      </Link>
      {isActive && (
        <div className="absolute inset-0 -z-10 rounded-full bg-blue-50" />
      )}
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-30 w-full px-4 pt-4">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-slate-200 bg-header-bg px-6 shadow-lg backdrop-blur-md">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Logo />
          </Link>
        </div>
 
        {/* Center: Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-2 text-sm font-medium md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
 
        {/* Right: Quote Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden h-9 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 text-sm font-bold text-white transition-colors hover:bg-blue-700 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Contact Us
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
