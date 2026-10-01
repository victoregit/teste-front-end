import technology from '../assets/categories/technology.png'
import supermarket from '../assets/categories/supermarket.png'
import drinks from '../assets/categories/drinks.png'
import tools from '../assets/categories/tools.png'
import health from '../assets/categories/health.png'
import fitness from '../assets/categories/fitness.png'
import fashion from '../assets/categories/fashion.png'

const categories = [
  [technology, 'Tecnologia'], [supermarket, 'Supermercado'], [drinks, 'Bebidas'], [tools, 'Ferramentas'], [health, 'Saúde'], [fitness, 'Esportes e Fitness'], [fashion, 'Moda'],
] as const

export function CategoryStrip() {
  return (
    <section className="categories page-shell" aria-label="Categorias em destaque">
      {categories.map(([image, label], index) => (
        <a className={index === 0 ? 'category is-selected' : 'category'} key={label} href={`#${label.toLowerCase().replaceAll(' ', '-')}`}>
          <span><img src={image} alt="" /></span>
          <b>{label}</b>
        </a>
      ))}
    </section>
  )
}
