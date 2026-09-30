import { useEffect, useState } from 'react'
import { CategoryStrip } from './components/CategoryStrip'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductShowcase } from './components/ProductShowcase'
import { ProductModal } from './components/ProductModal'
import { PartnerBanners } from './components/PartnerBanners'
import { BrandStrip } from './components/BrandStrip'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { getCatalog, type Product } from './lib/catalog'

export default function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const load = () => { setError(false); getCatalog().then(setProducts).catch(() => setError(true)) }
  useEffect(() => { load() }, [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryStrip />
        {error ? <section className="catalog-state page-shell"><p>Não foi possível carregar os produtos.</p><button onClick={load}>Tentar novamente</button></section> : products.length ? <ProductShowcase products={products} onSelect={setSelectedProduct} /> : <section className="catalog-state page-shell" aria-live="polite">Carregando produtos…</section>}
        <PartnerBanners />
        {products.length > 0 && <ProductShowcase products={products} onSelect={setSelectedProduct} />}
        <PartnerBanners />
        <BrandStrip />
        {products.length > 0 && <ProductShowcase products={products} onSelect={setSelectedProduct} />}
      </main>
      <Newsletter /><Footer />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  )
}
