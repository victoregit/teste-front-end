import { Icon } from './Icon'

const navItems = ['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia']

export function Header() {
  return <header className="site-header">
    <div className="benefits" aria-label="Benefícios da Econverse">
      <span><Icon name="shield" /> Compra <strong>100% segura</strong></span>
      <span><Icon name="truck" /> <strong>Frete grátis</strong> acima de R$ 200</span>
      <span><Icon name="card" /> <strong>Parcele</strong> suas compras</span>
    </div>
    <div className="header-main page-shell">
      <a className="brand" href="#inicio" aria-label="Econverse, página inicial"><i>ec</i><b>onverse</b></a>
      <form className="search" role="search" onSubmit={(event) => event.preventDefault()}>
        <label className="visually-hidden" htmlFor="site-search">Busque por produtos</label>
        <input id="site-search" type="search" placeholder="O que você está buscando?" />
        <button type="submit" aria-label="Pesquisar"><Icon name="search" /></button>
      </form>
      <nav className="header-actions" aria-label="Ações do cliente">
        <a href="#entrar" aria-label="Entrar"><Icon name="login" /></a><a href="#favoritos" aria-label="Favoritos"><Icon name="heart" /></a><a href="#conta" aria-label="Minha conta"><Icon name="user" /></a><a href="#carrinho" aria-label="Carrinho"><Icon name="cart" /></a>
      </nav>
    </div>
    <nav className="navigation page-shell" aria-label="Categorias principais">
      {navItems.map((item) => <a key={item} className={item === 'Ofertas do dia' ? 'is-active' : ''} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}
      <a href="#assinatura"><Icon name="crown" /> Assinatura</a>
    </nav>
  </header>
}
