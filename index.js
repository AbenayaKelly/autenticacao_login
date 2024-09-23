const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/bd");
const authRoutes = require("./routes/auth");


const app = express();

app.use(bodyParser.json());//Analisar o corpo das requisições no formato JSON e permite acesso ao dados enviados que fica armazenados em req.body


//Rotas

app.use("/auth", authRoutes);

// Sincronizar banco de dados e iniciar servidor
sequelize.sync().then(()=>{ // Cria tabelas necessárias no banco de dados com base nas definições dos modelos se ainda não existirem

    app.listen(3000,()=>{
        console.log("Servidor rodando na porta 3000")
    })
})