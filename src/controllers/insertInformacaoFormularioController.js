const db = require('../db/conn')

exports.insertInfomacaoFormulario= (req, res) =>{

    const reg1 = req.body.reg1
    const ino = req.body.ino
    const dis = req.body.dis
    const ass = req.body.ass
    const comp = req.body.comp
    const flex = req.body.flex
    const prep = req.body.prep
    const rel = req.body.rel
    const plan = req.body.plan
    const pont = req.body.pont
    const cont = req.body.cont
    const reg2 = req.body.reg2
    
    db.query(" INSERT INTO servidor_caracteristicas (registro_id_fk,sc_inovacao, sc_disciplina, sc_assiduidade, sc_compromisso_prof, sc_flexibilidade, sc_preparo_prof, sc_relacoes_interpessoais, sc_planejamento, sc_pontualidade, sc_controle_emocional,sc_funcionario_avaliado) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ", [reg1, ino, dis, ass, comp, flex, prep, rel, plan, pont, cont, reg2 ], (err, result) =>{
        if(err){
            res.send(err);
        }else{
            res.send({msg: 0})
        }
    })
}
