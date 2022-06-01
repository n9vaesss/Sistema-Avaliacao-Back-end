const db = require('../db/conn')

exports.info = (req, res) =>{

    const direcao = req.body.direcao
    const registro = req.body.registro
    const Nome = req.body.Nome
    const cpf = req.body.cpf
    const cargo = req.body.cargo
    const emprego = req.body.emprego
    const secretaria = req.body.secretaria
    const data = req.body.data
    const acesso = req.body.acesso
    const superior = req.body.superior
    const cargo_origem = req.body.cargo_origem
    const local = req.body.local

    switch(direcao){
        case 'INSERIR':
            db.query(" INSERT INTO servidores (registro_id_pk, serv_cpf, serv_nome, serv_cargo, serv_emprego, serv_secretaria, serv_dt_adm, serv_superior, serv_superior_1, serv_superior_2, serv_cargo_origem, serv_local_trabalho) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[registro, cpf, Nome, cargo, emprego, secretaria, data, acesso, superior, 1110, cargo_origem, local], (err, result) =>{
                if(err){
                    res.send(err)
                }else{
                    res.send({msg: "foi"})
                }
            })
        break;

        default:
            console.log(error)
    }
}