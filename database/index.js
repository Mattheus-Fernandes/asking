const sequelize = require("sequelize")

const connection = new sequelize("asking", "root", "14109015", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection