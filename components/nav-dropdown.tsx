"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface NavItem {
  name: string
  href: string
  tagline: string
}

interface NavDropdownProps {
  label: string
  items: NavItem[]
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  return (
    <div className="group relative px-4 py-2">
      <button className="flex items-center gap-1.5 text-sm font-medium text-slate-900 transition-colors hover:font-semibold hover:text-blue-600">
        {label}
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100">
        <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-2.5 text-sm transition-colors hover:bg-slate-100"
                >
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {item.tagline}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}