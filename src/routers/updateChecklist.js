const express = require("express")
const router = express.Router()

const updateChecklist = require("../controllers/updateCheklist")

router.put("/", updateChecklist.updateChecklist)

module.exports = router;