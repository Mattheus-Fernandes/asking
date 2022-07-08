const Pergunta = require("../model/Pergunta")

function index(req, res) {
    Pergunta.findAll({raw: true, order: [
        ["id","DESC"]
    ]})
    .then(perguntas => {
        res.render("index", {
            titulo: "Asking - Inicio",
            perguntas
        })
    } )
}

function perguntar(req, res) {
    res.render("perguntar", {
        titulo: "Asking - Perguntas"
    })
}

function pergunta(req, res) {

    let idPergunta = req.params.id
    Pergunta.findOne({
        where: {id: idPergunta}
    }).then(pergunta => {
        if(pergunta != undefined){
            res.render("pergunta",{
                titulo: "Asking - Respostas",
                pergunta
            })
        } else {
            res.redirect("/")
        }
    })
}

function salvarPergunta(req, res) {
    let pergunta = req.body.pergunta
    let resposta = req.body.resposta

    Pergunta.create({
        pergunta,
        resposta
    }).then(() => {
        res.redirect("/")
    })
}

module.exports = {
    index,
    perguntar,
    pergunta,
    salvarPergunta
}