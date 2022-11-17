import {usuario} from '../models/user.js';


//registrar un usuario en la base de datos
export const regusuario=(req,res)=>{
    const user=usuario(req.body);
    user
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
}


//muestra informacion de todos los usuarios de la base de datos

export const showuser=(req,res)=>{
    usuario
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
}

//muestra la informacion de un usuario especifico

export const shuserone=(req,res)=>{
    const {id}=req.params;
    console.log(req);
    usuario
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
};


//borrar un usario de la base de datos

export const deluser=(req,res)=>{
    const {id}=req.params;
    usuario
        .deleteOne({_id:id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
};

//Actualizar un usuario
export const upuser =  (req, res) => {
    const { id } = req.params;
    const { nomuser , password, correo } = req.body;
    usuario
      .updateOne({ _id: id }, { $set: { nomuser, password, correo } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };
