import { Product } from "@/lib/products"
import { ArrowRight } from "lucide-react"

interface CtaVisitProductProps {
  product: Product
}

export function CtaVisitProduct({ product }: CtaVisitProductProps) {
  const isLive = product.status === "live" && product.externalUrl !== "#"

  if (!isLive) {
    return (
      <div className="mt-8 inline-flex items-center justify-center rounded-lg bg-gray-200 px-6 py-3 text-base font-medium text-gray-500">
        Coming Soon
      </div>
    )
  }

  return (
    <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90">
      Open {product.name} <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  )
}