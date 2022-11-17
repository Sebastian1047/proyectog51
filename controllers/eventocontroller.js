import {evento} from '../models/eventos.js';

//guardar un evento deportivo

export const regevento = (req, res) => {
    const cevento = evento(req.body);
    cevento
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

//mostrar los eventos deportivos que estan en la bd de mongodb

export const showevento = (req,res) => {

     evento
     .find()
     .then((data)=> res.json(data))
     .catch((error)=> res.json({message:error})); 
 }



// mostrar un evento deportivo especifico

export const showonevento = (req, res) => {
    const { id } = req.params;
    evento
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };




//eliminar un evento deportivo

export const delonevent =  (req, res) => {
    const { id } = req.params;
    evento
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };


//actualizar un evento deportivo
export const upevento =  (req, res) => {
    const { id } = req.params;
    const { fecha , equipo1, equipo2, marcador1, marcador2, tipoevento } = req.body;
    evento
      .updateOne({ _id: id }, { $set: { fecha , equipo1, equipo2, marcador1, marcador2, tipoevento } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };