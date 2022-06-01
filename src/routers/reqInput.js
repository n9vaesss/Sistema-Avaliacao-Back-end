const express = require("express")
const router = express.Router()

const reqInputController = require("../controllers/reqInputController")

router.post("/", reqInputController.req)

module.exports = router;