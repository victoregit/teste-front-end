# Desafio Front-End Econverse

Implementação da página inicial solicitada no desafio Front-End da Econverse. A aplicação reproduz as seções da referência, consome o catálogo oficial em tempo de execução e apresenta os dados do produto selecionado em um modal acessível.

## Tecnologias

- React 19
- TypeScript
- Vite
- Sass/SCSS

Não são utilizadas bibliotecas de interface, backend, checkout, autenticação ou carrinho funcional.

## Requisitos

Antes de iniciar, tenha o Node.js e o npm instalados. É recomendável utilizar uma versão LTS atual do Node.js.

Você pode conferir as versões instaladas com:

```bash
node -v
npm -v
```

## Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/victoregit/teste-front-end.git
cd teste-front-end
```

Em seguida, instale as dependências:

```bash
npm install
```

## Scripts disponíveis

### Desenvolvimento

Inicia o servidor local de desenvolvimento. A URL de acesso é exibida no terminal, normalmente `http://localhost:5173`.

```bash
npm run dev
```

### Verificação de tipos

Executa a verificação de tipos do TypeScript.

```bash
npm run typecheck
```

### Build de produção

Gera a versão otimizada da aplicação na pasta `dist`.

```bash
npm run build
```

### Prévia do build

Serve localmente a versão gerada pelo build.

```bash
npm run preview
```

## Catálogo de produtos

Os produtos são carregados durante a execução a partir do endpoint oficial do desafio:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

A aplicação consulta o caminho local `/api/catalog`. No desenvolvimento, `vite.config.ts` encaminha esse caminho ao endpoint oficial. Isso evita depender de uma chamada direta do navegador a uma origem externa.

Para uma publicação na Vercel, `vercel.json` mantém a mesma rota com uma rewrite externa. Não existe cópia local do catálogo, função serverless ou backend próprio.

O catálogo trata os estados de carregamento, sucesso, resposta vazia e erro. Quando há falha na consulta, a interface oferece uma opção para tentar novamente.

## Produtos e preços

- O nome, a imagem, a descrição e o preço principal são recebidos do JSON oficial.
- O modal sempre usa os dados do produto selecionado.
- O preço anterior/riscado, quando exibido, é somente uma composição visual derivada do preço recebido; não é um segundo preço entregue pela API.
- O valor parcelado também é calculado a partir do preço principal.

## Estrutura do projeto

```text
src/
├── assets/          # Imagens e ícones utilizados pela interface
├── components/      # Componentes reutilizáveis da página
├── lib/             # Tipos, normalização e acesso ao catálogo
├── styles/          # Estilos SCSS globais e parciais
├── App.tsx          # Estado do catálogo e composição da página
└── main.tsx         # Ponto de entrada da aplicação
```

## Validação manual

Após iniciar a aplicação, valide ao menos os seguintes pontos:

1. Aguarde o carregamento da vitrine e confira os produtos recebidos.
2. Abra dois produtos diferentes pelo card ou pelo botão **Comprar**.
3. Confira imagem, nome, preço e descrição de cada produto no modal.
4. Feche o modal pelo botão, pela tecla `Escape` e pelo clique no overlay.
5. Teste os controles de quantidade, o foco por teclado e os carrosséis em telas menores.

Os cenários de erro e catálogo vazio dependem da resposta do endpoint; a interface já possui estados específicos e retry para essas situações.

## Lint e testes

Não há scripts de lint ou testes automatizados neste projeto. A validação técnica disponível é feita com:

```bash
npm run typecheck
npm run build
```

## Limitações do escopo

Busca, newsletter, links institucionais e botões de compra são elementos de interface do layout; eles não representam fluxos reais de e-commerce. O projeto não inclui carrinho funcional, checkout, autenticação, cadastro ou backend.
