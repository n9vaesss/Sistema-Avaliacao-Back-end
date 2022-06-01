const db = require('../db/conn')

exports.att= (req, res) =>{

    const Nome = req.body.Nome
    const cargo = req.body.cargo
    const emprego = req.body.emprego
    const secretaria = req.body.secretaria
    const acesso = req.body.acesso
    const superior = req.body.superior
    const local = req.body.local
    const registro = req.body.registro

    db.query("UPDATE servidores SET serv_nome = ?, serv_cargo = ?, serv_emprego = ?, serv_secretaria = ?, serv_superior = ?, serv_superior_1 = ?, serv_local_trabalho = ? WHERE registro_id_pk = ?", [Nome, cargo, emprego, secretaria, acesso, superior, local, registro], (err, result) =>{
        if(err){
            res.send(err)
        }else{
            res.send({msg: "foi"})
        }
    })
}