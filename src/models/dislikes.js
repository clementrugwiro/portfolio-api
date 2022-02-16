import pkg from "mongoose"
const { Schema, model } = pkg;

const dislikeschema = Schema({
        authorId: String,
        articleId:String
})



export default model("dislike",dislikeschema)