const {Schema,model} =require("mongoose");
const blogSchema =new Schema({
    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:true,
    },
    coverImageURL:{
        type:String,
        required:false,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },

},
{timestamps:true},
);


const Blog=model('blog',blogSchema);

module.exports=Blog;