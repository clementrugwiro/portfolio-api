import pkg from "mongoose"
const { Schema, model } = pkg;

const Articleschema = Schema({
        title: {
                type:String,
                required:[true,'please entere a title'],
                minlength:[6,'minimum length is 6 characters']
        },
        content :{
                type:String,
                required: [true,'please enter the body'],
                minlength:[60,'minimum length is 60 characters']
        },
        authorId: String,
        likes: {
                type:Number,
                default:0
        },
        dislikes:{
                type:Number,
                default:0
        },
        comment:{
                type:Number,
                default:0
        },

})



export default model("article",Articleschema)