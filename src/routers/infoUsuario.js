const express = require("express")
const router = express.Router()

const infoUsuario = require("../controllers/infoUsuarioController")

router.post("/", infoUsuario.usuario)

module.exports = router;