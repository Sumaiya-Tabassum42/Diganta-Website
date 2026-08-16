import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Product } from "@/lib/products"

export function ProductCard({
  product,
  onCardClick,
}: {
  product: Product
  index?: number
  onCardClick?: () => void
}) {
  const isLive = product.status === "live"
  const hasUrl = product.externalUrl !== "#"

  const cardInner = (
    <>
      <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-secondary/40">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={`${product.name} — ${product.tagline}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/60 font-mono text-sm font-semibold text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
            {product.name.charAt(0)}
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {product.category}
            </p>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">{product.name}</h3>
          </div>
        </div>

        {isLive && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Live
          </span>
        )}
      </div>

      <p className="mt-5 text-sm font-medium leading-relaxed text-foreground/90">{product.tagline}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {product.features.map((f) => (
          <span
            key={f}
            className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs font-medium text-muted-foreground"
          >
            {f}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between pt-1">
        {hasUrl ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Visit {product.name}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        ) : (
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
            Link coming soon
          </span>
        )}
      </div>
    </>
  )

  const baseClass =
    "shimmer-hover group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300"

  const href = hasUrl ? product.externalUrl : `/products/${product.slug}`

  if (onCardClick) {
    return (
      <button
        onClick={onCardClick}
        aria-label={`View details for ${product.name}`}
        className={`${baseClass} text-left hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10`}
      >
        {cardInner}
      </button>
    )
  }

  return (
    <Link
      href={href}
      target={hasUrl ? "_blank" : undefined}
      rel={hasUrl ? "noopener noreferrer" : undefined}
      aria-label={`Visit ${product.name}`}
      className={`${baseClass} hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10`}
    >
      {cardInner}
    </Link>
  );
}
