const db = require('../db/conn')

exports.usuario= (req, res) =>{

    const reg_usuario = req.body.reg_usuario

    db.query("SELECT * FROM servidores WHERE registro_id_pk = ? ",[reg_usuario], (err, result)=>{
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