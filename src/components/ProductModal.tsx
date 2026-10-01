import { useEffect, useRef, useState } from 'react'
import { formatCurrency, type Product } from '../lib/catalog'
import phoneImage from '../assets/product-phone.png'

type Props = { product: Product; onClose: () => void }

export function ProductModal({ product, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(document.activeElement instanceof HTMLElement ? document.activeElement : null)
  const [quantity, setQuantity] = useState(1)
  const details = product.description || 'Descrição indisponível.'

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector<HTMLButtonElement>('[data-close]')?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const items = dialogRef.current?.querySelectorAll<HTMLElement>('button, a, [tabindex]:not([tabindex="-1"])')
      if (!items?.length) return
      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [onClose])

  return (
    <div className="modal-overlay" role="presentation" onMouseDown={onClose}>
      <div
        className="product-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" data-close type="button" onClick={onClose} aria-label="Fechar">
          ×
        </button>
        <img
          src={product.imageUrl}
          onError={(event) => { event.currentTarget.src = phoneImage }}
          alt={product.name}
        />
        <div>
          <h2 id="modal-title">{product.name}</h2>
          <strong>{formatCurrency(product.price)}</strong>
          <p>{details}</p>
          <a href="#produtos">Veja mais detalhes do produto &gt;</a>
          <div className="quantity">
            <button type="button" onClick={() => setQuantity(value => Math.max(1, value - 1))} aria-label="Diminuir quantidade">−</button>
            <output aria-label="Quantidade">{quantity}</output>
            <button type="button" onClick={() => setQuantity(value => value + 1)} aria-label="Aumentar quantidade">+</button>
            <button className="button button--yellow" type="button">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
