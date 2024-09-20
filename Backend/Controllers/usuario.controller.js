const ModelUser = require ('../models/model');
const router = require('../routes/usuario.routes');

const usuarioCtrl = {};

//Metodo de Crear Registros
usuarioCtrl.createUser = async (req, res) =>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
}
//metodo de crear Registros
router.post('/',async(req,res)=>{
    const body=req.body;
    const respuesta=await ModelUser.create(body)
    res.send(respuesta)
})
//metodo de consultar registros
router.get('/',async(req,res)=>{
    const respuesta=await ModelUser.find({})
    res.send(respuesta)
})
//metodo de consultar registrar por id
router.get('/:,id',async(req,res)=>{
    const id=req.params.id;
    const respuesta=await ModelUser.findById({_id:id})
    res.send(respuesta)  
})
//metodo actualizar con put
router.put('/:id',async(req,res)=>{
    const id=req.params.id;
    const respuesta=await ModelUser.findByIdAndUpdate({_id:id},body)
    res.send(respuesta)
})
//metodo eliminar con put
router.delete('/:id',async(req,res)=>{
const id=req.params.id;
const respuesta=await ModelUser.deleteOne({_id:id})
res.send(respuesta)
})