"use client"

import { useState } from "react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { Reveal } from "@/components/reveal"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ZentixPreviewModal } from "@/components/zentix-preview-modal"
import { ProggaPreviewModal } from "@/components/progga-preview-modal"

export default function ProductsPage() {
  const [isZentixModalOpen, setIsZentixModalOpen] = useState(false)
  const [isProggaModalOpen, setIsProggaModalOpen] = useState(false)

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-6 py-24 sm:py-32">
        <Reveal className="max-w-2xl text-center mx-auto">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Our Products</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Explore our suite of intelligent solutions built to solve real business problems.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 120} className="h-full">
              <ProductCard
                product={product}
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
      </main>
      <SiteFooter />
      <ZentixPreviewModal isOpen={isZentixModalOpen} onClose={() => setIsZentixModalOpen(false)} />
      <ProggaPreviewModal isOpen={isProggaModalOpen} onClose={() => setIsProggaModalOpen(false)} />
    </>
  )
}