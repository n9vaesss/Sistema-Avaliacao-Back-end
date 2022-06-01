const db = require('../db/conn')

exports.relatorio= (req, res) =>{

    const reg_superior = req.body.reg_superior

    db.query("SELECT * FROM servidor_caracteristicas WHERE sc_funcionario_avaliado = ?",[reg_superior], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
