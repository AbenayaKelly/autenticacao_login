const {DataTypes} = require("sequelize") // importando o módulo 
const sequelize = require ("../config/bd") 

// Tipos de dados que tera na tabela user  no banco de dados 
const user = sequelize.define("user",{

    email:{     // Definindo campo email        
        type: DataTypes.STRING,
        allowNull: false, // Não pode ser nulo
        unique: true  // Tem que ser dado único 
    },
    password:{  // Definindo campo senha      
        type: DataTypes.STRING,
        allowNull: false // Não pode ser nulo
    }, 
},
{
    timestamps:false // Desabilitar os campos automáticos de data de criação e atualização gerada pelo banco de dados 
    

});

module.exports = user;
