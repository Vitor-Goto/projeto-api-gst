const router = require("express").Router()

const chamadoController = require("../controllers/chamadosController")

router.route("/chamados").post((req, res) => chamadoController.create(req, res))
router.route("/chamados").get((req, res) => chamadoController.getAll(req, res))
router.route("/chamados/:OS").get((req, res) => chamadoController.get(req, res))
router
  .route("/chamados/:OS")
  .put((req, res) => chamadoController.update(req, res))

module.exports = router
