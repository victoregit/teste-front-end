import { useEffect, useState } from 'react'
import { CategoryStrip } from './components/CategoryStrip'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductShowcase } from './components/ProductShowcase'
import { getCatalog, type Product } from './lib/catalog'

export default function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(false)
  const load = () => { setError(false); getCatalog().then(setProducts).catch(() => setError(true)) }
  useEffect(() => { load() }, [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryStrip />
        {error ? <section className="catalog-state page-shell"><p>Não foi possível carregar os produtos.</p><button onClick={load}>Tentar novamente</button></section> : products.length ? <ProductShowcase products={products} onSelect={() => undefined} /> : <section className="catalog-state page-shell" aria-live="polite">Carregando produtos…</section>}
      </main>
    </>
  )
}
