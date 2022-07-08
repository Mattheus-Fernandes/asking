const Pergunta = require("../model/Pergunta")
const Respostas = require("../model/Resposta")

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

            Respostas.findAll({
                where: {perguntaId: pergunta.id},
                order:[["id","DESC"]]
            }).then((respostas)=> {
                res.render("pergunta",{
                    titulo: "Asking - Respostas",
                    pergunta,
                    respostas
                })
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

function salvarResposta(req, res) {
    let corpo = req.body.corpo
    let idPergunta = req.body.pergunta

    Respostas.create({
        corpo: corpo,
        perguntaId: idPergunta
    }).then(()=> {
        res.redirect("/pergunta/"+idPergunta)
    })
}

module.exports = {
    index,
    perguntar,
    pergunta,
    salvarPergunta,
    salvarResposta
}