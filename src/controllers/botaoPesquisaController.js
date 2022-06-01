const db = require('../db/conn') 

exports.botaoPesquisa= (req, res) =>{

    const reg1 = req.body.reg1
    const params = req.body.params
    const direcao = req.body.direcao
    
    switch(direcao){
        case 'AVALIACAO_SUPERIOR':
            db.query("SELECT * FROM servidores JOIN checklist ON registro_id_pk = id_func_fk WHERE serv_nome LIKE ? AND serv_avaliado = 0 AND serv_superior_1 = ? OR  serv_secretaria LIKE ? AND serv_avaliado = 0 AND serv_superior_1 = ? OR registro_id_pk LIKE ? AND serv_avaliado = 0 AND serv_superior_1 = ?",[params, reg1, params, reg1, params, reg1], (err, result)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send(result) 
                }
            })
        break;

        case 'COMISSAO':
            db.query("SELECT * FROM servidores JOIN checklist ON registro_id_pk = id_func_fk WHERE serv_nome LIKE ? AND serv_comissao = 0 AND serv_superior_2 = ? OR  serv_secretaria LIKE ? AND serv_comissao = 0 AND serv_superior_2 = ? OR registro_id_pk LIKE ? AND serv_comissao = 0 AND serv_superior_2 = ?",[params, reg1, params, reg1, params, reg1], (err, result)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send(result) 
                }
            })
        break;

        case 'RELATORIO':
            db.query("SELECT * FROM servidores WHERE serv_nome LIKE ? AND serv_superior_2 = ? OR serv_secretaria LIKE ? AND serv_superior_2 = ? OR registro_id_pk LIKE ? AND serv_superior_2 = ?",[params , reg1, params , reg1 , params , reg1], (err, result)=>{
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

