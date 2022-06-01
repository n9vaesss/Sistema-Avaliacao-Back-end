const express = require("express")
const router = express.Router()

const updateinfo = require("../controllers/updateinfoController")

router.put("/", updateinfo.att)

module.exports = router;