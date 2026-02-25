
      const mongoose = require("mongoose");
    //   const router = express.Router();

    const blogSchema = mongoose.Schema({
        title:{
          type:String,
          require:true
        },
        discription:{
          type:String,
          require:true
        },
        summary:{
          type:String,
          require:true
        }
     
    })

    const blogModel = mongoose.model("blogs",blogSchema);

    // module. export = blogModel he chukiche aahe
    module.exports = blogModel;
    // module.export = blogModel; exports la s lavavach lagato
