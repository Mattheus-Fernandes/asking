const sequelize = require("sequelize")
const connection = require("../database/index")

const Pergunta = connection.define("pergunta", {
    pergunta: {
        type: sequelize.STRING,
        allowNull: false
    },

    resposta: {
        type: sequelize.TEXT,
        allowNull: false
    }
})


Pergunta.sync({force: false})
.then(() => console.log("Table created"))


module.exports = Pergunta