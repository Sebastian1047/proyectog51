import express from 'express';
import {usuario} from '../models/user.js';
import {evento} from '../models/eventos.js';
import {regusuario,showuser,shuserone,deluser,upuser} from '../controllers/usercontroller.js';
import { regevento, showevento, showonevento, delonevent, upevento} from '../controllers/eventocontroller.js';
import {db} from '../mongodb.js';

const user1=new usuario();
const evento1=new evento();

export const router=express.Router();


router.get('/',(req,res)=>{
    res.send('Bienvenidos a Node desde la raiz')
})

router.get('/login',(req,res)=>{
    res.send("bienbenidos a node desde login");
});

//rutas collection eventos

router.post('/regevento', regevento);
router.get('/shevento', showevento);
router.get('/shevento/:id', showonevento);
router.delete('/delevento/:id', delonevent);
router.put('/upevento/:id', upevento);

//rutas de coleccion de usuarios

router.post('/reguser',regusuario);
router.get('/shuser',showuser);
router.get('/shuser/:id',shuserone);
router.delete('deluser/:id',deluser);
router.put('/upuser/:id', upuser);


router.post('/agregar',(req,res)=>{
    res.send("archivo agregado con exito");
    console.log(req.body);
    user1.nombuser=req.body.nombuser;
    user1.password=req.body.password;
    user1.correo=req.body.correo;
});

router.post('/evento',(req,res)=>{
    res.send("archivo agregado con exito");
    console.log(req.body);
    evento1.fecha=req.body.fecha;
    evento1.equipo1=req.body.equipo1;
    evento1.equipo2=req.body.equipo2;
    evento1.resultado1=req.body.resultado1;
    evento1.resultado2=req.body.resultado2;
    evento1.tipoevento=req.body.tipoevento;
})
router.delete('/delete',(req,res)=>{
    res.send("archivo eliminado con exito");
});

export default router;
