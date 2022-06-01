
const express = require("express")
const router = express.Router()

const insertInfomacaoFormulario = require("../controllers/insertInformacaoFormularioController")

router.post("/", insertInfomacaoFormulario.insertInfomacaoFormulario)

module.exports = router;