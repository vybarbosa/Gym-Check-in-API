# 🏋️ Gym Check-in API

Projeto de estudo em **Back-end com Node.js**, focado em boas práticas de arquitetura, **SOLID**, **Design Patterns**, testes automatizados, **Docker**, **Prisma ORM** e **CI/CD**, do curso de back-end da rocketseat.

A ideia é evoluir este projeto **dia após dia**, versionando cada avanço para consolidar o aprendizado de forma prática e incremental.

---

## 🎯 Objetivo

Construir uma API completa para gerenciamento de **check-ins em academias**, contemplando autenticação, regras de negócio reais, escalabilidade e qualidade de código.

Este repositório serve tanto como **portfólio** quanto como **diário de evolução técnica**.

---

## 🧠 Conceitos e Tecnologias Estudadas

- Node.js
- TypeScript
- SOLID
- Clean Architecture
- Design Patterns
- Prisma ORM
- PostgreSQL
- Docker & Docker Compose
- Testes unitários
- Testes E2E
- JWT (JSON Web Token)
- CI/CD (GitHub Actions)

---

## 📌 Requisitos Funcionais (RFs)

- [ ] Cadastro de usuário
- [ ] Autenticação de usuário
- [ ] Obter perfil do usuário logado
- [ ] Obter número de check-ins do usuário logado
- [ ] Obter histórico de check-ins do usuário
- [ ] Buscar academias próximas
- [ ] Buscar academias pelo nome
- [ ] Realizar check-in em uma academia
- [ ] Validar check-in de um usuário
- [ ] Cadastrar uma academia

---

## 📐 Regras de Negócio (RNs)

- [ ] Não permitir cadastro com e-mail duplicado
- [ ] Usuário não pode realizar dois check-ins no mesmo dia
- [ ] Usuário só pode fazer check-in se estiver a no máximo **100 metros** da academia
- [ ] Check-in só pode ser validado até **20 minutos** após a criação
- [ ] Apenas administradores podem validar check-ins
- [ ] Apenas administradores podem cadastrar academias

---

## ⚙️ Requisitos Não-Funcionais (RNFs)

- [ ] Senhas devem ser criptografadas
- [ ] Persistência de dados em **PostgreSQL**
- [ ] Paginação de listas com **20 itens por página**
- [ ] Autenticação via **JWT**

---

## 🏗️ Arquitetura do Projeto

O projeto segue princípios de **Clean Architecture**, separando responsabilidades em camadas:

- **Controllers** – Interface HTTP
- **Use Cases** – Regras de negócio
- **Repositories** – Acesso a dados
- **Entities** – Regras do domínio
- **Infra** – Banco de dados, frameworks e providers

Essa abordagem facilita testes, manutenção e evolução do sistema.

---

## 🧪 Testes

- Testes unitários para regras de negócio
- Testes E2E para fluxos completos da aplicação
- Banco de dados isolado para testes

---

## 🐳 Docker

A aplicação utiliza Docker para garantir um ambiente padronizado:

- API Node.js
- Banco de dados PostgreSQL

Facilitando tanto o desenvolvimento local quanto a integração contínua.

---

## 🚀 Como executar o projeto

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# Instalar dependências
npm install

# Subir os containers
docker-compose up -d

# Rodar as migrations
npx prisma migrate dev

# Iniciar a aplicação
npm run dev
```

---

- Clean Architecture – Robert C. Martin
- SOLID Principles
- Documentação do Prisma
- Documentação do Docker

---

## ✍️ Autor

Projeto desenvolvido para fins educacionais, com foco em evolução contínua e boas práticas de engenharia de software.

Se você chegou até aqui, fique à vontade para acompanhar a evolução 🚀
