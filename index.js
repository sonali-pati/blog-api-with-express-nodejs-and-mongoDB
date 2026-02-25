     


    console.log("thank you")
        const express = require("express");
        const cors = require("cors");
        const mongoose = require("mongoose")

        // custom module import
        const blogRouter = require("./route/blog")
        // const blogRouter=require("../kele tar err yeto mhanun ekch dot slash route karane./route/blog")
        // const app = express()
        
    //   creating the connection with server and db
        mongoose.connect("mongodb://127.0.0.1:27017/intresting_blog")
        .then(()=>{
            console.log("connection success thanks")
        })
      
        const app = express()

    //  middleware
        app.use(express.json());
        app.use(cors())

//         routing setup

        app.use("/blogs",blogRouter)
         
        // app.get("/somthing",(req,res)=>{
        //     console.log("hello")
        //     res.send({mesage:"blog site working"})
        // })

        app.listen(8000,()=>{
            console.log("server is up running fine today again")
        })