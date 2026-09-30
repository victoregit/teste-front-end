import type { SVGProps } from 'react'

type IconName = 'shield' | 'truck' | 'card' | 'search' | 'login' | 'heart' | 'user' | 'cart' | 'crown' | 'technology' | 'market' | 'drinks' | 'tools' | 'health' | 'fitness' | 'fashion' | 'instagram' | 'facebook' | 'linkedin' | 'chevron-left' | 'chevron-right'

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
  instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-.8h.01',
  facebook: 'M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.5 1.6-1.5H18V4a23 23 0 0 0-2.1-.1C13.8 3.9 12.4 5.2 12.4 7.7V10H9v3h3.4v8H14Z',
  linkedin: 'M6 9v12M6 5.5v.1M10 21v-7a4 4 0 0 1 8 0v7m-8-7v-5',
  'chevron-left': 'm15 18-6-6 6-6',
  'chevron-right': 'm9 18 6-6-6-6',
}

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  if (name === 'login') return <svg viewBox="0 0 24 25" fill="#9F9F9F" aria-hidden="true" {...props}><path d="M21.0896.100342H2.67065l-.13086.010742C2.28135.155825 2.04897.332238 1.93628.569092l-.0459.123047L.125732 7.40991l-.000976.00098A.806.806 0 0 0 .100342 7.61206V23.4939c.000044.4248.380855.8056.805664.8057H23.4939c.4248-.0001.8056-.3809.8057-.8057v-8.4707c-.0002-.4247-.381-.8056-.8057-.8057h-9.4297v-1.665c.0031-.3884-.3078-.7501-.6924-.8047h-.0019a.782.782 0 0 0-.5391.125l-3.8828 2.4707c-.23472.1494-.34563.4197-.34571.6797 0 .2599.11091.5312.34571.6807l3.8818 2.4697.001.001c.2506.1569.5602.1242.7998-.0079.2396-.132.4323-.3762.4336-.6718v-1.666h8.624v6.8593H1.71167V8.41772H22.6882v3.07518l.003.0791c.0384.3961.4006.7382.8027.7383.4286 0 .8115-.3888.8057-.8174V7.61108a.805.805 0 0 0-.0498-.27636L21.7791.61792v-.000977a.805.805 0 0 0-.6807-.5166l-.0088-.000977ZM12.4529 16.032l-1.5772-1.0088 1.5772-1.0088v2.0176ZM11.7468 6.80542H1.95093l1.33691-5.09375h8.45896v5.09375ZM22.3357 6.80542h-8.9766V1.71167h7.0987l1.8779 5.09375Z" /></svg>
  if (name === 'heart') return <svg viewBox="0 0 32 32" fill="none" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M16 27s-12.5-7-12.5-15.5c.0002-1.5024.5208-2.95825 1.4731-4.12014C5.9255 6.21796 7.2509 5.42176 8.7239 5.12664c1.473-.29513 3.0029-.07097 4.3294.63436 1.3264.70534 2.3687 1.84831 2.9467 3.23459.579-1.38628 1.6203-2.52925 2.9467-3.23459 1.3265-.70534 2.8563-.92949 4.3294-.63436 1.473.29512 2.7984 1.09132 3.7508 2.25322C27.9791 8.54175 28.4997 9.9976 28.5 11.5 28.5 20 16 27 16 27Z" /></svg>
  if (name === 'user') return <svg viewBox="0 0 32 32" fill="none" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><circle cx="16" cy="16" r="12" /><circle cx="16" cy="15" r="5" /><path d="M8 25c.753-1.481 1.901-2.724 3.318-3.593A8.99 8.99 0 0 1 16 20.079a8.99 8.99 0 0 1 4.682 1.328C22.099 22.276 23.247 23.519 24 25" /></svg>
  if (name === 'cart') return <svg viewBox="0 0 32 32" fill="none" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M23 23H8.727L5.24 3.821a1.6 1.6 0 0 0-.343-.589C4.717 3.082 4.49 3 4.256 3H2" /><circle cx="10" cy="25.5" r="2.5" /><circle cx="23" cy="25.5" r="2.5" /><path d="M7.818 18H23.513c.468 0 .922-.164 1.281-.464.36-.3.603-.717.686-1.178L27 8H6" /></svg>
  if (name === 'instagram') return <svg viewBox="0 0 24 24" fill="none" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" /><path d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z" /><path d="M17.5 6.5H17.51" /></svg>
  if (name === 'facebook') return <svg viewBox="0 0 24 24" fill="none" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" /></svg>
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" fill="none" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" /><path d="M6 9H2V21H6V9Z" /><path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" /></svg>
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name]} /></svg>
}
