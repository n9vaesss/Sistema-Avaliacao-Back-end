const express = require("express")
const router = express.Router()

const botaoPesquisa = require("../controllers/botaoPesquisaController")

router.post("/", botaoPesquisa.botaoPesquisa)

module.exports = router;