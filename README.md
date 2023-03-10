<h1 align="center"> 🚧 Projeto em desenvolvimento 🚧</h1>

# Sobre o projeto

O objetivo do projeto é colocar em prática e desenvolver novos conhecimentos. A ideia é uma aplicação Fullstack de um e-commerce de produtos eletrônicos onde poderá ser realizado o cadastro de usuário, login e a visualização dos produtos. Além disso, ter a função de **inserir**, **editar** e **excluir** produtos através do perfil de admin.

### Features

- [x] Cadastro de usuários (backend)
- [x] Cadastro de produtos (backend)
- [x] Login de usuário com autenticação
- [ ] Filtragem de produtos
- [ ] Rota com acesso restrito

### ⚠ Pré-requisitos
Para você conseguir executar o projeto na sua máquina e testá-lo, deverão estar instaladas as seguintes ferramentas: <br>
- <a href="https://nodejs.org/en/">NodeJS</a> para instalar dependências e rodar o localhost.
- <a href="https://insomnia.rest/download">Insomnia</a> ou <a href="https://www.postman.com/">Postman</a> para o uso dos métodos HTTP
### 👩‍💻 Rodando o Back End (servidor)
1 - Clone este repositório
```sh
$ git clone https://github.com/GabeOP/e-commerce.git
```

2 - Entre na pasta 'backend'
```sh
$ cd backend
```

3 - Instale as dependências que estão listadas no arquivo package.json
```sh
$ npm install
```

4 - Execute o servidor
```sh
$ node index.js
```

---
Para o banco de dados, decidimos utilizar o **MongoDB** pois queríamos entender como funciona. Os dados cadastrados são inseridos no banco de dados na nuvem (**MongoDB Atlas**). Repare também que a senha cadastrada é enviada para o banco de dados já encriptada. Graças ao <a href="https://www.npmjs.com/package/bcrypt?activeTab=readme">bcrypt</a> que já faz todo esse serviço com funções simples de serem utilizada. Demonstração abaixo 👇

![Screenshot](./img/atlas.png)
---

### Autores:

Yuri: https://github.com/Yur1sz <br>
Gabriel: https://github.com/GabeOP
