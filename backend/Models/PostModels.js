import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title:{type:String,required:[true,"title is required"]},
    description:{type:String,required:[true,"desc is required"]},
    author:{type:mongoose.Schema.ObjectId,required:[true,"author is required"],ref:"User"},
    image:{type:String,required:[true,"image is required"]},
    imageId:{type:String},
    category:{type:mongoose.Schema.Types.ObjectId,required:[true,"category is required"],ref:"Category"}
},
{timestamps:true})

const Post = mongoose.model("Post",postSchema)
export default Post