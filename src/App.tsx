import { useCallback, useEffect, useState } from 'react'
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

type CatalogStatus = 'loading' | 'success' | 'empty' | 'error'

export default function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [catalogStatus, setCatalogStatus] = useState<CatalogStatus>('loading')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const load = useCallback(async () => {
    setCatalogStatus('loading')

    try {
      const catalog = await getCatalog()
      setProducts(catalog)
      setCatalogStatus(catalog.length > 0 ? 'success' : 'empty')
    } catch {
      setProducts([])
      setCatalogStatus('error')
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryStrip />
        {catalogStatus === 'loading' && (
          <section className="catalog-state page-shell" aria-live="polite">
            Carregando produtos…
          </section>
        )}
        {catalogStatus === 'error' && (
          <section className="catalog-state page-shell" aria-live="assertive">
            <p>Não foi possível carregar os produtos.</p>
            <button type="button" onClick={load}>Tentar novamente</button>
          </section>
        )}
        {catalogStatus === 'empty' && (
          <section className="catalog-state page-shell" aria-live="polite">
            Nenhum produto está disponível no momento.
          </section>
        )}
        {catalogStatus === 'success' && (
          <ProductShowcase products={products} onSelect={setSelectedProduct} showTabs />
        )}
        <PartnerBanners />
        {catalogStatus === 'success' && <ProductShowcase products={products} onSelect={setSelectedProduct} />}
        <PartnerBanners />
        <BrandStrip />
        {catalogStatus === 'success' && <ProductShowcase products={products} onSelect={setSelectedProduct} isLast />}
      </main>
      <Newsletter />
      <Footer />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  )
}
