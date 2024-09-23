const {Sequelize} = require ("sequelize");

const sequelize = new Sequelize("bd", "root", "",{
    host: "localhost",
    dialect: "mysql",
});

sequelize.authenticate()
.then(() => console.log("Conecatado ao banco de dados com sucesso"))
.catch(err => console.log("Erro ao conectar ao banco de dados:", err));



module.exports = sequelize;