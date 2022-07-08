const sequelize = require("sequelize")
const connection = require("../database/index")

const Resposta = connection.define("resposta", {

    corpo: {
        type: sequelize.TEXT,
        allowNull: false
    },

    perguntaId: {
        type: sequelize.INTEGER,
        allowNull: false
    }


})


Resposta.sync({force: false})

module.exports = Resposta