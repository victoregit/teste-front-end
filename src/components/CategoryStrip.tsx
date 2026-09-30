import { Icon } from './Icon'

const categories = [
  ['technology', 'Tecnologia'], ['market', 'Supermercado'], ['drinks', 'Bebidas'], ['tools', 'Ferramentas'], ['health', 'Saúde'], ['fitness', 'Esportes e Fitness'], ['fashion', 'Moda'],
] as const

export function CategoryStrip() {
  return <section className="categories page-shell" aria-label="Categorias em destaque">
    {categories.map(([icon, label], index) => <a className={index === 0 ? 'category is-selected' : 'category'} key={label} href={`#${label.toLowerCase().replaceAll(' ', '-')}`}><span><Icon name={icon} /></span><b>{label}</b></a>)}
  </section>
}
