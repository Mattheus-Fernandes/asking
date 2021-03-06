const router = require("express").Router()
const indexController = require("../controller/index")

router.get("/", indexController.index)
router.get("/perguntar", indexController.perguntar)
router.get("/pergunta/:id", indexController.pergunta)
router.post("/salvarpergunta", indexController.salvarPergunta)
router.post("/responder", indexController.salvarResposta)



module.exports = router