const db = require('../db/conn')

exports.req= (req, res) =>{

    const registro = req.body.registro

    db.query("SELECT * FROM servidores WHERE registro_id_pk = ?",[registro], (err, result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

