# Desafio Front-End Econverse

Implementação da home do desafio Front-End da Econverse com React, TypeScript e Sass. A página consome o catálogo oficial, apresenta os dados do produto selecionado em modal e possui layout responsivo para dispositivos móveis.

## Demonstração

[Acesse a aplicação publicada na Vercel](https://teste-front-end-ten-sooty.vercel.app/)

## Tecnologias

- React
- TypeScript
- Vite
- Sass/SCSS

## Requisitos

- Node.js
- npm

```bash
node -v
npm -v
```

## Instalação

```bash
git clone https://github.com/victoregit/teste-front-end.git
cd teste-front-end
npm install
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run typecheck` | Verifica os tipos TypeScript. |
| `npm run build` | Gera o build de produção em `dist`. |
| `npm run preview` | Exibe localmente o build de produção. |

## Catálogo

Os produtos são consumidos em tempo de execução a partir do endpoint oficial:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

No desenvolvimento, a rota `/api/catalog` é encaminhada ao endpoint em `vite.config.ts`. Na Vercel, a mesma rota é mantida em `vercel.json`.

Nome, imagem, descrição e preço principal vêm do catálogo. O preço riscado, quando exibido, é uma composição visual derivada do preço oficial.

## Estrutura

```text
src/
├── assets/       # Imagens e ícones
├── components/   # Componentes React
├── lib/          # Catálogo e formatação de dados
├── styles/       # Estilos SCSS
├── App.tsx       # Página e estado do catálogo
└── main.tsx      # Entrada da aplicação
```

## Validação

```bash
npm run typecheck
npm run build
```

Não há scripts de lint ou testes automatizados. A validação do desafio é feita manualmente, incluindo carregamento da vitrine, modal, teclado e responsividade.
