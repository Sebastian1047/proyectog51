import express from 'express';

export const router=express.Router();


router.get('/',(req,res)=>{
    res.send('Bienvenidos a Node desde la raiz')
})

router.get('/login',(req,res)=>{
    res.send("bienbenidos a node desde login");
});

router.post('/agregar',(req,res)=>{
    res.send("archivo agregado con exito");
});
router.delete('/delete',(req,res)=>{
    res.send("archivo eliminado con exito");
});

export default router;
