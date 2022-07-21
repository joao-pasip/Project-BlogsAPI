# Projeto Blog's API

Projeto feito para treinar a criação de API's, CRUD (Create, Read, Update, Delete) de posts, utilizando a arquitetura MSC, e também para introduzir a utilização do ORM Sequelize. Seguindo os princípios REST.

Todas os usuários cadastrados têm a validação de login feita utilizando a biblioteca JWT, mantendo a autorização e autenticação nas ações referentes à aplicação de acordo com cada usuário permitido no processo de alteração e publicação dos posts.

Já sobre as validações utilizadas nos middlewares, elas são feitas com a biblioteca Zod.

<hr></hr>

## 🛠 Habilidades
Node.js, MySQL, Arquitetura MSC, Zod, ORM Sequelize e JWT.

<hr></hr>

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar variáveis de ambiente no seu .env

Um exemplo já está disponível no arquivo `.env.example`, bastando renomear para `.env` e escolher o valor das variáveis.

<hr></hr>

## Utilização

- Para clonar o projeto: `git clone git@github.com:joao-pasip/Project-BlogsAPI.git`.

- Para instalar as dependências basta rodar o comando `npm install` e acessar as funcionalidades da aplicação.

- Já existe um arquivo `docker-compose.yml` (Disponibilizado pela Trybe). Bastando usar o comando `docker-compose up` para rodar o MySQL e o Node pelo Docker.

- `npm start` para criar o banco de dados, usar os migrates pelo Sequelize e iniciar a aplicação.

- Utilizar alguma Plataforma de API para acessar os endpoints e entender seus comportamentos. Exemplos: Postman e Insomnia (Utilizado no desenvolvimento desse projeto).

<hr></hr>

## Diagrama

![Diagrama de relacionamentos das tabelas](blogsAPI.png)

<i> Imagem disponibilizada pela Trybe </i>

<hr></hr>

## Endpoints

- POST `/login` que deve receber no body os campos `email` e `password`.
- POST `/user` que deve receber no body os campos `displayName`, `email`, `password` e `image`.
- `A partir desse ponto todos os próximos endpoints requerem validação por token que foi gerado no login (e, devem ser passados no headers Authorization)`
- GET `/user` que retorna todos os usários cadastrados.
- GET `/user/:id` que retorna o usuário pertencente ao id passado por parâmetro.
- POST `/categories` que deve receber no body o campo `name` para o cadastro de uma nova categoria.
- GET `/categories` que retorna todas as categorias do banco de dados.
- POST `/post` que insere um novo post no banco de dados. Deve receber no body os campos `title`, `content` e um array `categoryIds` (contendo ids de categorias já cadastradas no banco de dados).
- GET `/post` que retorna todos os posts do banco de dados.
- GET `/post/:id` que retorna um post pelo id.
- PUT `/post/:id` que edita um post por id.
- DELETE `/post/:id` que deleta um post por id.
- DELETE `/user/me` que apago o usuário logado do banco de dados.
- GET `/post/search?q=query` que pesquisa o termo passado na URL (substituindo a palavra query) nos títulos e/ou conteúdo dos posts cadastrados no banco de dados.

<hr></hr>

## Considerações finais

A curva de aprendizado foi incrível durante o desenvolvimento do Blogs API, visto que tive que criar as migrations pelo sequelize-cli e as models em função. Antes disso, foi necessário a configuração de todo o ambiente de trabalho para fazer esse CRUD. Nesse projeto pude testar  várias formas de fazer queries utilizando Sequelize (JOIN, WHERE, LIKE, UPDATE e DELETE). E, com o desenrolar do projeto e as configurações iniciais feitas e corretas, o andamento no desenvolvimento foi tornando-se mais fácil e rápido. Além disso, foi minha primeira experiência para usar autorizações e autenticações usando JSON Web Token(JWT). Sendo assim, fico satisfeito com o resultado final do projeto Blogs API e os diversos aprendizados adquiridos!

![Diagrama de relacionamentos das tabelas](resultBlogAPI.jpeg)