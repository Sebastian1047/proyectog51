import mongoose from "mongoose";

const bd_url='mongodb+srv://sebas1047:Sebas1047.@cluster0.k4fpyeg.mongodb.net/dbeventos?retryWrites=true&w=majority';
export const db= await mongoose.connect(bd_url);
console.log("la conexion fue realizada con exito a la db",db.connection.name);
export default db;