const express = require("express")
const router = express.Router()

const infoChecklistAuto = require("../controllers/infoChecklistAutoController")

router.post("/", infoChecklistAuto.infoChecklistAuto)

module.exports = router;