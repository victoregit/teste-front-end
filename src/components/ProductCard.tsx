import { useState } from 'react'
import type { Product } from '../lib/catalog'
import { formatCurrency, priceBeforeDiscount } from '../lib/catalog'
import phoneImage from '../assets/product-phone.png'

type Props = { product: Product; onSelect: (product: Product) => void }

export function ProductCard({ product, onSelect }: Props) {
  const [imageSource, setImageSource] = useState(product.imageUrl)
  const installment = product.price / 2
  const description = product.description && product.description !== product.name
    ? product.description
    : null

  return (
    <article className="product-card">
      <button
        className="product-card__trigger"
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`Ver ${product.name}`}
      >
        <img src={imageSource} onError={() => setImageSource(phoneImage)} alt="" />
      </button>
      <h3>{product.name}</h3>
      {description && <p>{description}</p>}
      <span className="product-card__previous-price">{formatCurrency(priceBeforeDiscount(product.price))}</span>
      <strong>{formatCurrency(product.price)}</strong>
      <small>ou 2x de {formatCurrency(installment)} sem juros</small>
      <small className="product-card__shipping">Frete grátis</small>
      <button className="product-card__buy" type="button" onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  )
}
