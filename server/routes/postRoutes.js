import express from "express";
import * as dotenv from 'dotenv';
import{v2 as cloudinary} from 'cloudinary';
import Post from '../mongodb/models/post.js';

dotenv.config();//to make sure env variables are populated

const router=express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  
  //to get all posts
  router.route('/').get(async (req, res) => {
    try {
      const posts=await Post.find({});
      res.status(201).json({ success: true, data: posts });
    } catch (err) {
      res.status(500).json({ success: false, message: error });
    }
  });
  
  //create a post
  router.route('/').post(async (req, res) => {
    try {
      const {name,prompt,photo}=req.body;//getting from front-end
      const photoUrl=await cloudinary.uploader.upload(photo);
  
      const newPost=await Post.create({//creating new post in data base
        name,
        prompt,
        photo: photoUrl.url,//this is coming from cloudinary
      });
  
      res.status(201).json({ success:true, data: newPost });
    } 
    catch (err) {
      res.status(500).json({ success:false, message: error });
    }
  });

export default router