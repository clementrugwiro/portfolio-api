import pkg from "mongoose"
const { Schema, model } = pkg;

const commentschema = Schema({
        authorId: String,
        articleId:String,
        commenttxt:String
})



export default model("comment",commentschema)