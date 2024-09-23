const jwt = require("jsonwebtoken")
const JWT_SECRET = "your_secret_key"

// verificar a autenticidade do token JWT em rotas protegidas
function authMiddleware(req, res, next){ 
    const token = req.header("Autentization"); // Tenta recuperar o token do cabeçalho da requisição HTTP usando req.header('Authorization')
    if(!token) return res.status(401).json({message: "Acesso negado"});

    try{
        // Valida o token separando  usando a chave secreta 
        const verified = jwt.verify(token.split('')[1], JWT_SECRET); // Método token.split(' ')[1] divide a string do token em duas partes (Bearer e o token real) e usa apenas o token.
        req.user = verified;// Em caso de sucesso os dados é armazenado em user e permite que os mesmo sejam acessados 
        next(); // Função que permite a próxima rota
    }catch{
        res.status(400).json({message: "Token inválido"});
    }
}

module.exports = authMiddleware;