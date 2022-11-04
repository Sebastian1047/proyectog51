import express from "express";
import cors from 'cors'

//import blogRoutes from './routes/routes.js'

const app=express();
app.use(cors());
app.use(express.json());
//app.use('/usuarios',blogRoutes)

app.get('/',(req,res)=>{
    res.send('hola mundo como anda')
})
app.listen(8000,console.log('servidor corriendo en http://localhost:3000/'))

