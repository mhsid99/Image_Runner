//here we define how our post looks like in the database. the structure of the post
import mongoose from "mongoose";

const Post=new mongoose.Schema({
    name:{type:String,required:true},
    prompt:{type:String,required:true},
    photo:{type:String,required:true},
});
const PostSchema=mongoose.model('Post',Post);

export default PostSchema;