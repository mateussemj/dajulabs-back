# 📦 API de Vendas com Estornos

Este projeto é uma API desenvolvida em **Node.js + Express**, com leitura de arquivos CSV, detecção de estornos de vendas e documentação via **Swagger**. Os testes são realizados com **Jest** e **Supertest**.

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar em modo de desenvolvimento

```bash
npm run dev
```

> Esse comando utiliza `nodemon` para recarregar automaticamente em alterações.

### 4. Rodar simulando produção

```bash
npm run start
```

> O servidor será iniciado com `NODE_ENV=production`.

---

## 🧪 Como rodar os testes

Os testes estão localizados na pasta `tests/` e cobrem os serviços e endpoints da API.

Para executar os testes:

```bash
npm test
```

Ou, para ver a cobertura de testes:

```bash
npm run test:coverage
```


---

## 📄 Documentação da API

A documentação da API está disponível através do **Swagger**.

### Acesse no endpoint:

```
/api-docs
```

A documentação inclui:
- Descrição dos endpoints
- Parâmetros e exemplos
- Schemas de resposta

---

## 📂 Estrutura do Projeto (resumida)

```
src/
├── controllers/
├── data/
├── docs/           # Swagger config e schemas
├── models/
├── routes/
├── services/
├── utils/
├── server.js
└── start.js

tests/
└── e2e/
```

---

## ✅ Requisitos

- Node.js v18+ (ou superior)
- npm v9+

--