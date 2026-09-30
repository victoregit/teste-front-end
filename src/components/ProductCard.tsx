import type { Product } from '../lib/catalog'
import { formatCurrency } from '../lib/catalog'

type Props = { product: Product; onSelect: (product: Product) => void }
export function ProductCard({ product, onSelect }: Props) {
  return <article className="product-card"><button className="product-card__trigger" onClick={() => onSelect(product)} aria-label={`Ver ${product.name}`}><img src={product.imageUrl} alt="" /></button><p>{product.name}</p><strong>{formatCurrency(product.price)}</strong><button className="product-card__buy" onClick={() => onSelect(product)}>Comprar</button></article>
}
