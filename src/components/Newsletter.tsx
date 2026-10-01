export function Newsletter() {
  return (
    <section className="newsletter">
      <div className="page-shell">
        <div>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label className="visually-hidden" htmlFor="newsletter-name">Nome</label>
          <input id="newsletter-name" placeholder="Digite seu nome" required />
          <label className="visually-hidden" htmlFor="newsletter-email">E-mail</label>
          <input id="newsletter-email" type="email" placeholder="Digite seu e-mail" required />
          <button className="button button--yellow" type="submit">Inscrever</button>
          <label className="terms"><input type="checkbox" required /> Aceito os termos e condições</label>
        </form>
      </div>
    </section>
  )
}
