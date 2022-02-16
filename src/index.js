import express from "express"  
import mongoose from "mongoose"
import  users from "./routes/users.js"
import articles from "./routes/articles.js"
import messages from "./routes/messages.js"
import login from "./routes/login.js"
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swagger.js';
import bodyParser from 'body-parser'

// const { connect } = con
let app = express();

mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true,})
    .then(()=>{
        const port = process.env.PORT || 7000
        app.listen(port ,()=>{
            console.log(`server running at port ${port}......`)
            app.emit('appStarted')
        })
    })

    app.use(bodyParser.json())
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions))
    app.use("/home",(req,res)=>{
        res.status(200).send({status:200,message:"you on home"})
    })
    app.use("/api",articles)
    app.use("/api",users)
    app.use("/api",messages)
    app.use("/api",login)

  export default app;