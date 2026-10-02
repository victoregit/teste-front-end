import logo from '../assets/econverse-logo.png'

export function BrandStrip() {
  return (
    <section className="brands page-shell" aria-labelledby="brands-title">
      <h2 id="brands-title">Navegue por marcas</h2>
      <div>
        {Array.from({ length: 5 }, (_, index) => (
          <a href="#produtos" key={index} aria-label="Econverse">
            <img src={logo} alt="" />
          </a>
        ))}
      </div>
    </section>
  )
}
