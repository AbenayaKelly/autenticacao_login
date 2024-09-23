# Projeto de autenticação com Node.js
Este projeto é um sistema simples de autenticação de usuários utilizando Node.js,banco de dados mysql, Sequelize, `bcryptjs` para hash de senhas, e `jsonwebtoken` para geração de tokens JWT. Ele permite que um usuário faça login e obtenha um token de autenticação.

## Instruções de Instalação

Siga os passos abaixo para configurar e executar o projeto:

### 1. Inicializar o Projeto

Execute o comando abaixo para criar um novo arquivo `package.json`, que armazenará as dependências do projeto.

``` bash
npm init -y
```

### 2. Instalar Dependências

Instale as dependências necessárias: express, mysql2, sequelize  jsonwebtoken, bcryptjs body-parser, nodemon.

```bash
npm install express mysql2 sequelize jsonwebtoken bcryptjs body-parser nodemon
```

### 3. Script para gerar o hash da senha

Execute o comando:

```bash
node generate_hash.js
```

### 4. Criar o Banco de Dados

Crie o banco de dados .

```sql
CREATE DATABASE db;

USE crud_db;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
```

### 5. Criar a Tabela users

Crie a tabela.

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

### 6. Inserir um Usuário

Insere um usuário na tabela.
```sql
INSERT INTO users (email, password) VALUES ('exemplo@exemplo.com', 'hash_gerado_aqui');
```

### 7. Executar o Servidor

Agora, você pode iniciar o servidor em modo de desenvolvimento usando o nodemon com o comando:

```bash
npm run dev
```
