import { useRef } from 'react'
import type { Product } from '../lib/catalog'
import { ProductCard } from './ProductCard'
type Props = { products: Product[]; onSelect: (product: Product) => void }
export function ProductShowcase({ products, onSelect }: Props) {
  const listRef = useRef<HTMLDivElement>(null)
  const scroll = (side: 1 | -1) => listRef.current?.scrollBy({ left: side * 320, behavior: 'smooth' })
  return <section className="showcase page-shell" aria-labelledby="related-title"><div className="section-title"><span /><h2 id="related-title">Produtos relacionados</h2><span /></div><a className="showcase__all" href="#produtos">Ver todos</a><div className="showcase__rail"><button onClick={() => scroll(-1)} aria-label="Produtos anteriores">‹</button><div className="showcase__cards" ref={listRef}>{products.map(product => <ProductCard key={product.id} product={product} onSelect={onSelect} />)}</div><button onClick={() => scroll(1)} aria-label="Próximos produtos">›</button></div></section>
}
