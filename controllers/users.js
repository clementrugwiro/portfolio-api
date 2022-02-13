import user from "../models/user.js";

const handleErrors=(err)=>{
    console.log(err.message,err.code);
    let errors={
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        pwd:''
    }
    if(err.code===11000){
        errors.email=" that email is already registered"
    }

    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message
        })
    }
    return errors
}

export async function usersget(req,res){
    const users = await user.find()
    res.send(users)
}
export async function userget(req,res){
    try{
        const auser = await user.findOne({ _id: req.params.id})
    res.send(auser)
    } catch{
        res.status(404)
        res.send({error: "user doesn't exist!"})
    }
}
export async function userpost(req,res){
    try{
        
    const auser = new user({
        firstname: req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        email    : req.body.email,
        pwd : req.body.pwd
    })
    await auser.save()
    res.status(201).json(auser)
   }
   catch(err){
    const errors = handleErrors(err);
    res.status(400).json(errors)
   }
}
export async function userpatch(req,res){
    try{
        const auser = await user.findOne({_id: req.params.id})

        if(req.body.title){
            post.title= req.body.firstname
        }
        if(req.body.content){
            post.content = req.body.lastname
        }
        await auser.save()
        res.send(auser)
    }
    catch{
        res.status(404)
        res.send({error:"user doesn't exist!!"})
    }
}
export async function userdelete(req,res){
    try{
        await user.deleteOne({_id: req.params.id})
        res.status(204).send()
    }
    catch{
        res.status(404)
        res.send({error:"user doesn't exist!"})
    }
}
