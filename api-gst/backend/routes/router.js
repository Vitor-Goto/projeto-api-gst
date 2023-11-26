const router = require("express").Router()

//Chamados router
const chamadosRouter = require("./chamados")

router.use("/", chamadosRouter)

module.exports = router
