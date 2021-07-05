//const ModeloDulces = require('../modelo/ModeloDulces');
const modeloDulce = require('../modelo/ModeloDulces')

function index(req,res) {
    console.log('ok');
    modeloDulce.find({})
    .then(dulces => {
        if(dulces.length) return res.status(200).send({dulces});
        return res.status(204).send({message:'No hay contenido'});
    }).catch(error => res.status(500).send({error}));
}

function agregar(req,res) {
    console.log(req.body);
    new modeloDulce(req.body).save()
    .then(dulces => {
        res.status(200).send({dulces})
    }).catch(error => res.status(500).send({error}));
}

function buscar(req,res,next) {
    let consulta ={};
    
    
}

module.exports={
    index,
    agregar
}