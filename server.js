const express = require("express")
const app = express()
const routes = require("./routes/routes")

//Hability EJS
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))

app.use("/", routes)






//Conection with server 
const port = process.env.PORT || 8080
app.listen(8080,()=> console.log(`The server is listening on the port ${port}`))