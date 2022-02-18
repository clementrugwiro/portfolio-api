import message from "../models/message.js"

export async function messageget(req,res){
    const messages = await message.find()
    res.send(messages)
}
export async function messagepost(req,res){
    // const articl = new message()
    // let { error } = articl.joiValidate(req.body);
    // if(error) return res.status(400).send(error.details[0].message) 
     const msg = new message({
        uname: req.body.uname,
        email : req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    })
    
    await msg.save()
    res.send(msg)
}
export async function messagedelete(req,res){
    try{
        await message.deleteOne({_id: req.params.id})
        res.status(204).send()
    }
    catch{
        res.status(404)
        res.send({error:"message doesn't exist!"})
    }
}