const express = require("express")
const app = express()
const routes = require("./routes/routes")
const db = require("./database/index")


//Enabling Databse
db.authenticate()
.then(()=> console.log("Connection with database"))
.catch((msgError) => {
    console.log(msgError)
})

//Enabling EJS
app.set("view engine", "ejs")

app.set(express.static("public"))

app.use(express.urlencoded({extended: true}))

app.use("/", routes)



//Conection with server 
const port = process.env.PORT || 8080
app.listen(8080,()=> console.log(`The server is listening on the port ${port}`))