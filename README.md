# Econverse — teste Front-End

Implementação da home do desafio Front-End da Econverse, construída a partir das referências visuais fornecidas. A página exibe vitrines de produtos, modal acessível e seções institucionais, sem fluxo de compra, backend ou autenticação.

## Stack

- React
- TypeScript
- Vite
- Sass/SCSS

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O Vite exibirá a URL local da aplicação no terminal.

## Verificação de tipos

```bash
npm run typecheck
```

## Build de produção

```bash
npm run build
```

## Prévia do build

```bash
npm run preview
```

## Catálogo de produtos

Os produtos são carregados em tempo de execução a partir do endpoint oficial do desafio:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

O projeto usa o caminho local `/api/catalog`. A configuração de proxy em `vite.config.ts` encaminha esse caminho ao endpoint oficial durante a execução pelo Vite, evitando dependência de uma chamada direta do navegador ao domínio externo.

Para uma futura publicação no Vercel, `vercel.json` mantém esse mesmo caminho com uma rewrite externa. Não há função, backend ou cópia local do catálogo.

O catálogo possui estados distintos de carregamento, sucesso, resposta vazia e erro. Em caso de falha, a interface disponibiliza uma nova tentativa.

## Preços

O preço principal exibido em cada card e no modal vem diretamente do JSON oficial e é formatado em reais.

Quando exibido, o preço anterior/riscado é uma composição visual derivada do preço oficial. Ele não representa um segundo preço informado pela API. A parcela exibida também é calculada a partir do preço principal.

## Validação manual

1. Aguarde o carregamento da vitrine.
2. Abra dois produtos diferentes pelo card ou pelo botão **Comprar**.
3. Confira imagem, nome, preço e descrição do produto selecionado.
4. Feche o modal pelo botão, pela tecla `Escape` e pelo clique no overlay.
5. Teste os controles de quantidade e a navegação por teclado.

Também verifique os estados de carregamento, erro com nova tentativa e catálogo vazio quando esses cenários puderem ser reproduzidos no ambiente.

## Lint e testes automatizados

O projeto não possui scripts de lint ou testes automatizados no momento. A validação prevista para esta entrega é manual, além de `npm run typecheck` e `npm run build`.

## Limitações conhecidas

- Busca, newsletter, navegação institucional e botão de compra são controles visuais; não simulam fluxos de e-commerce.
- Não há checkout, carrinho funcional, autenticação ou backend.
- A fidelidade visual deve ser confirmada comparando a aplicação executada com as referências do desafio na viewport correspondente.
