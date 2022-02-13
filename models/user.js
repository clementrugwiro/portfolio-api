import pkg from "mongoose";
import iemail from "validator";
import { genSalt, hash } from 'bcrypt';
const { Schema, model } = pkg;
const { isEmail } = iemail


const schema = Schema({
        firstname: {
                type:String,
                required:[true,'please enter a firstname'],
                minlength:[6,'minimum length is 6 characters']
        },
        lastname :{
                type:String,
                required:[true,'please enter a lastname'],
                minlength:[6,'minimum length is 6 characters']
        },
        username : {
                type:String,
                required:[true,'please enter a username'],
                minlength:[6,'minimum length is 6 characters']
        },
        email:{
                type:String,
                unique:true,
                required:[true,'please enter an email'],
                minlength:[6,'minimum length is 6 characters'],
                validate: [isEmail,'please enter a valid email']
        },
        pwd:{
                type:String,
                required:[true,'please enter a password'],
                minlength:[6,'minimum length is 6 characters']
        },
        role:{
                type:String,
                default:"user"
        }

})
schema.pre('save',async function(next){
        const salt = await genSalt()
        this.pwd = await hash(this.pwd,salt)
        next();
})

export default model("user",schema)