function index(req, res) {
    res.render("index", {
        titulo: "Asking - Inicio"
    })
}

function perguntar(req, res) {
    res.render("perguntar", {
        titulo: "Asking - Perguntas"
    })
}

function pergunta(req, res) {
    res.render("pergunta", {
        titulo: "Asking - Respostas"
    })
}
function salvarPergunta(req, res) {
    let pergunta = req.body.pergunta
    let resposta = req.body.resposta

    console.log(pergunta, resposta)
}

module.exports = {
    index,
    perguntar,
    pergunta,
    salvarPergunta
}