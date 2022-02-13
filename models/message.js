import pkg from "mongoose"
const { Schema, model } = pkg;

const messageschema = Schema({
        uname: {
                type: String,
                 required:true
        },
        email :{
                type: String,
                 required:true
        },
        subject: {
                type: String,
                 required:true
        },
        message: {
                type: String,
                 required:true
        },
        

})
export default model("message",messageschema)