import pkg from "mongoose";
import iemail from "validator";
const { Schema, model } = pkg;
const { isEmail } = iemail

const schema = Schema({
    email:{
        type:String,
        required:[true,'please enter an email'],
        minlength:[6,'minimum length is 6 characters'],
        validate: [isEmail,'please enter a valid email']
},
pwd:{
        type:String,
        required:[true,'please enter a password'],
        minlength:[6,'minimum length is 6 characters']
}
})
export default model("login",schema)