     
        const express = require("express")
        const mongoose = require("mongoose");
        const router = express.Router();
        const blogModel=require("../model/blog_model");
   
//           ENDPOINT TO GET ALL BLOGS

//      hya khalchya code mule thunderclient madhe mi database madhe bharalela title discrisummaryhe 
//    array of object chya form madhe aale

        router.get("/",(req,res)=>{
            
                blogModel.find()
                .then((blogs)=>{
                  res.send(blogs)
                })
                .catch((err)=>{
                  console.log(err)
                  res.send({message:"some problemm"})
                })
             
        })

//     ENDPOINT TO CREATE ABLOG
// hy code mule thunder client madhe blog tayar hot aahe &compass madhe pan blog  add zala nantar 
//  mhanje ha endpoint pan barobar run hot aahe
        router.post("/",(req,res)=>{
        let blog= req.body
        blogModel.create(blog)
        .then((blog)=>{
          
          res.send(blog)
          res.send({mesage:"blog crate"})
        })
        .catch((err)=>{
        console .log(err)
        res.send({message:"some prpblem"})
        })
      })


//       ENDPOINT TO GET SINGLE BLOG BASE ON ID
//    hy endpoint mule "get single blog ha msg yet ahe thunderclient madhe pan to ek blog purn aata disat aahe"
        
    router.get("/:id",(req,res)=>{
     let id= req.params.id
     blogModel.findOne({_id:id})
     .then((one)=>{
        console.log(one)
        res.send(one)
        // res.send({message:"get single blog"})
        
     })
     .catch((err)=>{
        console.log(err)
        res.send({message:"some problem"})
     }
) 
    })
              
      // ENDPOINT TO DELETE A BLOG  
      // blog deleted ha msg thunder client madhe yet aahe mhanje this endpoint is also working
      // thuderclient madhe http://localhost:8000/blogs/66fe3fad9a992ff7fbb61864(hi auto genrated id takane without he"") ashi url takali

      router.delete("/:id",(req,res)=>{
        let id= req.params.id
        blogModel.deleteOne({_id:id})
        .then((msg)=>{
          res.send({message:"blog deleted"})
        })
        .catch((err)=>{
          consolr.log("err")
          res.send({message:"some problem"}) 
        })
      })

      // ENDPOINT TO UPDATE ABLOG
        // thunder client madhe path takatana auto generated id takane & body madhe pan data kay update karayacha to takane
        // ujavya sile barober blog updated ha message yeto mhanje ha endpoint pan barober aahe
         router.put("/:id",(req,res)=>{
            let data=req.body
            let id= req.params.id
            blogModel.updateOne({_id:id},data)
            .then((updateOne)=>{
              // res.send(updateOne)
              res.send({message:"blog updated"})
            })
            .catch((err)=>{
              console.log(err)
              res.send({message:"some problem"})
            })
         })
        
 
        module.exports = router;
        // exports cha s lavane imp aahe
// hya module.exports router la  index.js file madhe vaparnyasathi tyache nav blogRouter dile
// i.e const blogRouter=rerquire("./route/blog")