const express = require("express")
const router = express.Router()

const relatorioController = require("../controllers/relatorioController")

router.post("/", relatorioController.relatorio)

module.exports = router;