import { useId, useRef, useState } from 'react'
import type { Product } from '../lib/catalog'
import { ProductCard } from './ProductCard'
import { Icon } from './Icon'
type Props = { products: Product[]; onSelect: (product: Product) => void; showTabs?: boolean }
const tabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

export function ProductShowcase({ products, onSelect, showTabs = false }: Props) {
  const listRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const [isAtStart, setIsAtStart] = useState(true)
  const scroll = (side: 1 | -1) => listRef.current?.scrollBy({ left: side * 322, behavior: 'smooth' })

  return (
    <section className="showcase page-shell" aria-labelledby={titleId}>
      <div className="section-title">
        <span />
        <h2 id={titleId}>Produtos relacionados</h2>
        <span />
      </div>
      {showTabs ? (
        <nav className="showcase__tabs" aria-label="Categorias de produtos">
          {tabs.map((tab, index) => (
            <a className={index === 0 ? 'is-active' : ''} href="#produtos" key={tab}>{tab}</a>
          ))}
        </nav>
      ) : (
        <a className="showcase__all" href="#produtos">Ver todos</a>
      )}
      <div className="showcase__rail">
        <button type="button" onClick={() => scroll(-1)} aria-label="Produtos anteriores" disabled={isAtStart}>
          <Icon name="chevron-left" />
        </button>
        <div
          className="showcase__cards"
          ref={listRef}
          onScroll={event => setIsAtStart(event.currentTarget.scrollLeft <= 1)}
        >
          {products.map(product => <ProductCard key={product.id} product={product} onSelect={onSelect} />)}
        </div>
        <button type="button" onClick={() => scroll(1)} aria-label="Próximos produtos">
          <Icon name="chevron-right" />
        </button>
      </div>
    </section>
  )
}
