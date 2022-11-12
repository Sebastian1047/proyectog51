
import mongoose from "mongoose";
const userSchema=new mongoose.Schema(
    {
        nombuser:{
            type: String,
            require:true
        },
        password:{
            type:string,
            require:true
        },
        correo:{
            type:String,
            require:true,
            unique:true
        }
    }
);

export const usuario=mongoose.model('usuarios',userSchema);
export default usuario;