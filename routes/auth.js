const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router()

const JWT_SECRET = "your_secret_key"; // Define uma chave secreta para assinar os tokens JWT

router.post("/login", async (req, res) => {
    const {email,password} = req.body; // Extração do email e senha do corpo de requisição  ao qual deve ser enviado pelo cliente.

    // Verificação da existência do usuário
    const user = await User.findOne({where:{email}})
    if(!user)
        return res.status(400).json({ message:"Usuário não encontrado"});

      // Verificar se a senha está correta
    const validPassword = await bcrypt.compare(password, user.password); // Comparando a senha que entrou com a senha cadastrada no banco de dados 
    if(!validPassword)
        return res.status(400).json({message:"Senha incorreta"})

    //Gerar token

    const token = jwt.sign({id: user.id}, JWT_SECRET, { expiresIn: "1h"}); // Após obter sucesso na autenticação, um token é gerado  com expiração em  1 hora 
    res.json({token}); // Retorna o token ao usuário

})
 module.exports = router;