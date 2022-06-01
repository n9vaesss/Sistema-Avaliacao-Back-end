const express = require("express")
const app = express()
const cors = require("cors")

app.use(
    express.json()
)
app.use(cors());
app.use(
    express.urlencoded({
        extend: true,
    })
)


const indexRoute = require('./routers/router_index')
const loginRoute = require('./routers/login')
const infoUsuario = require('./routers/infoUsuario')
const insertInfomacaoFormulario = require('./routers/insertInformacaoFormulario')
const updateChecklist = require('./routers/updateChecklist')
const infoChecklistAuto = require('./routers/infoChecklistAuto')
const botaoPesquisa = require('./routers/botaoPesquisa')
const infoCRUD = require('./routers/InfoCRUD')
const reqInput = require('./routers/reqInput')
const updateinfo = require('./routers/updateinfo')
const relatorio = require('./routers/relatorio')

app.use("/", indexRoute)

app.use("/login", loginRoute)

app.use("/infoUsuario", infoUsuario)

app.use("/insertInfoFormulario", insertInfomacaoFormulario)

app.use("/updateChecklist", updateChecklist)

app.use("/infoChecklistAuto", infoChecklistAuto)

app.use("/botaoPesquisa", botaoPesquisa)

app.use("/infoCRUD", infoCRUD)

app.use("/reqInput", reqInput)

app.use("/updateinfo", updateinfo)

app.use("/relatorio", relatorio)



module.exports = app;