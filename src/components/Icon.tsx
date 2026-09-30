import type { SVGProps } from 'react'

type IconName = 'shield' | 'truck' | 'card' | 'search' | 'login' | 'heart' | 'user' | 'cart' | 'crown' | 'technology' | 'market' | 'drinks' | 'tools' | 'health' | 'fitness' | 'fashion'

const paths: Record<IconName, string> = {
  shield: 'M12 3 5 6v5c0 4.8 3 8.2 7 10 4-1.8 7-5.2 7-10V6l-7-3Zm-3 8 2 2 4-4',
  truck: 'M3 6h11v9H3V6Zm11 3h3l3 3v3h-6V9Zm-8 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
  card: 'M3 5h18v14H3V5Zm0 4h18M7 15h3',
  search: 'm20 20-4.3-4.3m1.3-4.7a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z',
  login: 'M4 4h12v16H4V4Zm12 8H8m5-3 3 3-3 3',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z',
  user: 'M20 21a8 8 0 0 0-16 0m12-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  cart: 'M3 3h2l2.4 12.2h10.9l2-8.2H6M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  crown: 'm3 8 4 3 5-7 5 7 4-3-2 10H5L3 8Z',
  technology: 'M3 5h13v10H3V5Zm5 14h11V9h2v12H8v-2Zm-2-1h4',
  market: 'M4 9h16v11H4V9Zm-1-4h18l-2 4H5L3 5Zm5 8v4m4-4v4m4-4v4',
  drinks: 'M9 3h6v5l2 3v9H7v-9l2-3V3Zm0 11h6m5-4h2v10h-4V10h2Z',
  tools: 'm14 5 5 5-9 9-5-5 9-9Zm-8.5 4.5L3 7l2-2 2.5 2.5m9 7L20 18l-2 2-3.5-3.5',
  health: 'M12 20s-8-4.5-8-10a4.4 4.4 0 0 1 8-2.6A4.4 4.4 0 0 1 20 10c0 5.5-8 10-8 10Zm-7 0 3-3m8 0 3 3',
  fitness: 'M7 4h3v4h4V4h3v5l3 3-2 2-3-3v9h-2v-7h-2v7H9v-9l-3 3-2-2 3-3V4Z',
  fashion: 'M8 4 10 2h4l2 2 4 2-2 14H6L4 6l4-2Zm2 0v4h4V4',
}

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name]} /></svg>
}
