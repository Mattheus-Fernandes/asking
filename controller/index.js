function index(req, res) {
    res.render("index", {
        tittle: "Asking - Inicio"
    })
}

function perguntar(req, res) {
    res.render("perguntar", {
        tittle: "Asking - Perguntas"
    })
}

function pergunta(req, res) {
    res.render("pergunta", {
        tittle: "Asking - Respostas"
    })
}

module.exports = {
    index,
    perguntar,
    pergunta
}