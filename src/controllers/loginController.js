const db = require('../db/conn')

exports.login= (req, res) =>{

    const login = req.body.login
    const password = req.body.password

    db.query("SELECT * FROM servidores WHERE registro_id_pk = ? AND serv_cpf = ?",[login, password], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            if(result.length > 0){
                res.send(result)
            }else{
                res.send({msg: 0 })
            }
        }
    })
}

