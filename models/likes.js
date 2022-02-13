import pkg from "mongoose"
const { Schema, model } = pkg;

const likeschema = Schema({
        authorId: String,
        articleId:String
})



export default model("like",likeschema)