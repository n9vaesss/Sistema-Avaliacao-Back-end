const express = require("express")
const router = express.Router()

const infoCRUD = require('../controllers/infoCRUDController')

router.post("/", infoCRUD.info)

module.exports = router;