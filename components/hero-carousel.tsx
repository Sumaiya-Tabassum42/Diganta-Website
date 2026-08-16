"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const images = [
  { src: "/hero/hero-neural.png", alt: "Abstract neural network visualization" },
  { src: "/hero/hero-data.png", alt: "Abstract data points and connections visualization" },
  { src: "/hero/hero-circuit.png", alt: "Abstract digital circuit board visualization" },
]

export function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src || "/placeholder.svg"}
          alt={img.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* light wash so foreground text stays readable while imagery shows through */}
      <div className="absolute inset-0 bg-white/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
    </div>
  )
}
