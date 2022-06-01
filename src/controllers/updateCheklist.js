const db = require('../db/conn')

exports.updateChecklist= (req, res) =>{

    const reg1 = req.body.reg1
    const direcao = req.body.direcao

    switch(direcao){
        case 'AUTOAVALIACAO':
            db.query(" UPDATE checklist SET serv_auto_avaliacao = 1 WHERE id_func_fk = ? ", [reg1], (err, result) =>{
                if(err){
                    res.send(err);
                }else{
                res.send({msg: 0})
                }
            })
        break;

        case 'AVALIACAO_DO_SUPERIOR':
            db.query(" UPDATE checklist SET serv_avaliado = 1 WHERE id_func_fk = ? ", [reg1], (err, result) =>{
                if(err){
                    res.send(err);
                }else{
                res.send({msg: 0})
                }
            })
        break;

        case 'COMISSAO':
            db.query(" UPDATE checklist SET serv_comissao = 1 WHERE id_func_fk = ? ", [reg1], (err, result) =>{
                if(err){
                    res.send(err);
                }else{
                res.send({msg: 0})
                }
            })
        break;

        default:
            console.log(error)
    }

    
}
