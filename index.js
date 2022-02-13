import express from "express"  
import con from "mongoose"
import  users from "./routes/users.js"
import articles from "./routes/articles.js"
import messages from "./routes/messages.js"
import login from "./routes/login.js"
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './app.js';
import bodyParser from 'body-parser'

const { connect } = con

connect(process.env.DATABASE,{useNewUrlParser: true})
    .then(()=>{
        


        const app = express()
        app.use(bodyParser.json())
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions))
        app.use("/home",(req,res)=>{
            let name = req.body.name
            res.send(name)
        })
        app.use("/api",articles)
        app.use("/api",users)
        app.use("/api",messages)
        app.use("/api",login)

        const port = 7000
        app.listen(port,()=>{
            console.log(`server running at port ${port}......`)
        })
    })
    