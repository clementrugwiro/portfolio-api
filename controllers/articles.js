import jswt from "jsonwebtoken"
import article from "../models/article.js"
import like from "../models/likes.js"
import jwt from "jsonwebtoken"
const { JsonWebTokenError } = jswt

export async function articlesget(req,res){
    console.log("=======",req.user)
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

     const articl = new article({
        title: req.body.title,
        content : req.body.content,
        authorId: req.user.id,
    })
    
    await articl.save()
    console.log(req.user.id)
    res.send(articl)
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