export type Product = { id: string; name: string; description: string; imageUrl: string; price: number }

const catalogUrl = '/api/catalog'

const stringValue = (value: unknown) => typeof value === 'string' ? value.trim() : ''

function normalizeProduct(value: unknown, index: number): Product | null {
  if (!value || typeof value !== 'object') return null
  const entry = value as Record<string, unknown>
  const name = stringValue(entry.productName)
  const description = stringValue(entry.descriptionShort)
  const imageUrl = stringValue(entry.photo)
  const price = typeof entry.price === 'number' ? entry.price : Number(entry.price)
  if (!name || !imageUrl || !Number.isFinite(price) || price < 0) return null
  return { id: `${index}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, name, description, imageUrl, price }
}

export async function getCatalog(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(catalogUrl, { signal })
  if (!response.ok) throw new Error('Não foi possível carregar os produtos.')
  const data: unknown = await response.json()
  const payload = data && typeof data === 'object' ? data as Record<string, unknown> : null
  const items: unknown[] | null = payload && Array.isArray(payload.products) ? payload.products : null
  if (!items) throw new Error('O catálogo retornou um formato inválido.')
  return items.map(normalizeProduct).filter((product): product is Product => product !== null)
}

export const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

export const referenceDiscountRate = 1 - 28.9 / 30.9
export const priceBeforeDiscount = (salePrice: number) => salePrice / (1 - referenceDiscountRate)
