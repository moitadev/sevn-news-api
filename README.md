# SEVN News API

Este projeto faz parte de um teste técnico. A API fornece dados mockados para artigos de notícias, organizados em três endpoints principais.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Biome](https://biomejs.dev/) (Ferramenta de linting e formatação)
- [dotenv](https://www.npmjs.com/package/dotenv) (Para gerenciamento de variáveis de ambiente)
- [tsx](https://tsx.is/) (Para executar arquivos TypeScript diretamente)

## Estrutura do Projeto

sevn-news-api/
│
├── src/
│ ├── data/
│ │ └── articles.ts
│ ├── routes/
│ │ ├── home.ts
│ │ └── news.ts
│ ├── http/
│ │ ├── app.ts
│ │ └── server.ts
├── .env
├── .nvmrc
├── biome.json
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

## Endpoints

A API possui três endpoints principais:

1. **Obter os artigos principais da Home**
   - **Endpoint:** `GET /home/main-articles`
   - **Descrição:** Retorna uma lista de artigos principais para a página inicial.

2. **Obter os artigos secundários da Home**
   - **Endpoint:** `GET /home/secondary-articles`
   - **Descrição:** Retorna uma lista de artigos secundários para a página inicial.

3. **Obter os detalhes de uma notícia**
   - **Endpoint:** `GET /news/article/:id`
   - **Descrição:** Retorna os detalhes de um artigo específico com base no ID fornecido.

## Instalação e Execução

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/moitadev/sevn-news-api.git
   cd sevn-news-api
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

3. **Execute a aplicação:**

   ```sh
   npm dev run
   ```

A aplicação estará disponível na porta definida na variável de ambiente PORT ou na porta padrão 3000.

## Estrutura dos Dados

Os artigos possuem a seguinte estrutura:

```json
{
  "id": 1,
  "image": "image1.jpg",
  "category": "Technology",
  "title": "Main Article 1",
  "subtitle": "Subtitle for main article 1",
  "text": "Full text of the main article 1...",
  "publicationDate": "2023-05-23T10:00:00Z",
  "author": "Author 1"
}
```

Este README.md fornece uma visão geral clara do projeto, suas tecnologias, estrutura, endpoints e instruções de instalação e execução.