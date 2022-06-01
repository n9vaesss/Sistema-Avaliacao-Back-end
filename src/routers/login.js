const express = require("express")
const router = express.Router()

const loginControler = require("../controllers/loginController")

router.post("/", loginControler.login)

module.exports = router;