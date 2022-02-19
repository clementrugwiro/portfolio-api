import jswt from "jsonwebtoken"
import article from "../models/article.js"
import like from "../models/likes.js"
import dislike from "../models/dislikes.js"
import comment from "../models/comments.js"
import jwt from "jsonwebtoken"
const { JsonWebTokenError } = jswt

const handleErrors=(err)=>{
    // console.log(err.message,err.code);
    let errors={
        title:'',
        content:''
    }

    if(err.message.includes("article validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message
        })
    }
    return errors
}







0103001161084

export async function articlesget(req,res){
const articles = await article.find()
res.json(articles.filter(art=>art.authorId===req.user.id))  
}
export async function AllArticlesget(req,res){
    const articles = await article.find()
    res.send(articles)
}
export async function articleget(req,res){
    try{
        const articl = await article.findOne({ _id: req.params.id})
    res.send(articl)
    } catch{
        res.status(404)
        res.send({error: "article doesn't exist!"})
    }
}
export async function articlepost(req,res){
        try{
     const articl = new article({
        title: req.body.title,
        content : req.body.content,
        authorId: req.user.id,
    })
    
    await articl.save()
    console.log(req.user.id)
    res.send(articl)
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json(errors)
       }

}
export async function articlepatch(req,res){
    try{
        const article = await article.findOne({_id: req.params.id})

        if(req.body.title){
            article.title= req.body.title
        }
        if(req.body.content){
            article.content = req.body.content
        }
        await article.save()
        res.send(article)
    }
    catch{
        res.status(404)
        res.send({error:"article doesn't exist!!"})
    }
}
export async function articledelete(req,res){
    try{
        await deleteOne({_id: req.params.id})
        res.status(204).send()
    }
    catch{
        res.status(404)
        res.send({error:"article doesn't exist!"})
    }
} 
export async function articlelike(req,res){
    const liked = await like.find()
   const alike = liked.find(likes=>likes.authorId===req.user.id && likes.articleId===req.params.id) 
   const articl = await article.findOne({ _id: req.params.id})
    
   if(!alike){
    const likes = new like({
        articleId: req.params.id,
        authorId: req.user.id,
    })
    articl.likes =articl.likes+1
    await articl.save()
    await likes.save()
    console.log(req.user.id)
    res.send("you liked the article")
    }
    else{
        res.send("already liked the articles")
    }

}
export async function articledislike(req,res){
    const disliked = await dislike.find()
   const adislike = disliked.find(likes=>likes.authorId===req.user.id && likes.articleId===req.params.id) 
   const articl = await article.findOne({ _id: req.params.id})
    
   if(!adislike){
    const dislikes = new like({
        articleId: req.params.id,
        authorId: req.user.id,
    })
    articl.dislikes =articl.dislikes+1
    await articl.save()
    await dislikes.save()
    console.log(req.user.id)
    res.send("you disliked the article")
    }
    else{
        res.send("already liked the articles")
    }

}
export async function articlecomment(req,res){
   const articl = await article.findOne({ _id: req.params.id})
    

    const comments = new comment({
        articleId: req.params.id,
        authorId: req.user.id,
        commenttxt: req.body.commenttxt
    })
    articl.comment =articl.comment+1
    await articl.save()
    await comments.save()
    console.log(req.user.id)
    res.send(comments)
  
}
export async function Alllikesget(req,res){
    const likes = await like.find()
    res.json(likes.filter(art=>art.authorId===req.user.id))
}
export async function Alldislikesget(req,res){
    const dislikes = await dislike.find()
    res.json(dislikes.filter(art=>art.authorId===req.user.id))
}
export async function Allcommentsget(req,res){
    const comments = await comment.find()
    res.json(comments.filter(art=>art.authorId===req.user.id))
}