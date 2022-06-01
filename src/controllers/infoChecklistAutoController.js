const db = require('../db/conn')

exports.infoChecklistAuto= (req, res) =>{

    const reg1 = req.body.reg1
    const direcao = req.body.direcao

    switch(direcao){
        case 'AUTO_AVALIACAO':
            db.query("SELECT serv_auto_avaliacao FROM checklist WHERE id_func_fk = ?",[reg1], (err, result)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send(result)
                }
            })
        break;
        default:
            console.log(error)
    }

    
}