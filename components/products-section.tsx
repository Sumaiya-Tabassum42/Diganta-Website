"use client"

import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { Reveal } from "@/components/reveal"
import { useState } from "react"
import { ZentixPreviewModal } from "./zentix-preview-modal"
import { ProggaPreviewModal } from "./progga-preview-modal"

export function ProductsSection() {
  const [isZentixModalOpen, setIsZentixModalOpen] = useState(false)
  const [isProggaModalOpen, setIsProggaModalOpen] = useState(false)

  return (
    <section id="products" className="relative scroll-mt-20 border-b border-border/70 bg-secondary/30 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.76 0.02 255) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.76 0.02 255) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 100%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 100%, black 40%, transparent 100%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl text-center mx-auto">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">Our Products</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A suite of AI products, one platform
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Each product is a standalone solution. Select one to open its dedicated
            website in a new tab.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 120} className="h-full">
              <ProductCard
                product={product}
                index={i}
                onCardClick={
                  product.id === 'zentix'
                    ? () => setIsZentixModalOpen(true)
                    : product.id === 'progga'
                    ? () => setIsProggaModalOpen(true)
                    : undefined
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
      <ZentixPreviewModal isOpen={isZentixModalOpen} onClose={() => setIsZentixModalOpen(false)} />
      <ProggaPreviewModal isOpen={isProggaModalOpen} onClose={() => setIsProggaModalOpen(false)} />
    </section>
  )
}
