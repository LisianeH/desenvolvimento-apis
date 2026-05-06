# 🛒 API RESTful - Gestão de Pedidos

Este projeto é uma API RESTful desenvolvida em **Node.js** com **Express** para gerenciar um sistema de pedidos. O projeto foi construído utilizando uma arquitetura em camadas (Service, Repository e Utils) para separar as regras de negócio do acesso aos dados, garantindo um código limpo e de fácil manutenção.

Os dados são persistidos de forma simples em arquivos locais (`.json`), ideal para o escopo desta atividade de desenvolvimento de APIs.

---

## 💡 A Ideia do Projeto

A aplicação permite realizar as operações básicas de um **CRUD** completo (Create, Read, Update, Delete) focadas no contexto de pedidos e clientes. As funcionalidades (User Stories) implementadas incluem:

- **US01:** Cadastro de novos pedidos (gerando data, hora e situação 'ABERTO' automaticamente).
- **US02:** Listagem de todos os pedidos e filtragem por situação específica.
- **US03:** Busca de pedidos detalhados pelo ID.
- **US04:** Atualização da situação do pedido (ex: de ABERTO para CONCLUIDO).
- **US05:** Exclusão de pedidos do sistema.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de servidores web e endpoints.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, você precisará ter o Node.js instalado em sua máquina.

### Passo a Passo

1. Clone este repositório ou baixe o código fonte.
2. Acesse a pasta raiz do projeto no seu terminal.
3. Instale as dependências executando:
   ```bash
   npm install
   ```
4. Inicie o servidor local da API:
   ```bash
   node app.js
   ```
5. O servidor estará rodando em: `http://localhost:3004`

---

## 📬 Testando a API com Postman

Para facilitar o teste de todas as rotas e regras de negócio da aplicação, foi disponibilizada uma **Collection do Postman** contendo todas as requisições (GET, POST, PUT, DELETE) pré-configuradas.

### Como importar no Postman:

1. No repositório do projeto, localize a pasta chamada `collection`.
2. Abra o seu aplicativo **Postman**.
3. No canto superior esquerdo do Postman, clique no botão **"Import"**.
4. Arraste e solte o arquivo `.json` que está dentro da pasta `collection` (ou clique em *choose files* para selecionar o arquivo no seu computador).
5. Confirme a importação. Agora você verá a coleção "Atividade Avaliativa - Aula10" na aba *Collections* e poderá executar os testes com apenas um clique!

---

## 📸 Telas das Funcionalidades (Postman)

Na pasta `prints` estão algumas demonstrações do funcionamento da API sendo testada no Postman.

---

**Desenvolvido por:** Lisiane Hoffmeister
**Disciplina:** Desenvolvimento de APIs (5º Semestre ADS - UniSenac)