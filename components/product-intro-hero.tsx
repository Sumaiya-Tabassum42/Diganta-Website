import { Product } from "@/lib/products"

interface ProductIntroHeroProps {
  product: Product
}

export function ProductIntroHero({ product }: ProductIntroHeroProps) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-base font-semibold uppercase tracking-wider text-primary">
            {product.category}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">{product.description}</p>
        </div>
      </div>
    </section>
  )
}