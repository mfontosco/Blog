import Post from "../Models/PostModels.js";
import Category from "../Models/category.js";
import dotenv from "dotenv";
dotenv.config();
import cloudinary  from "cloudinary";

const getAllPost = async (req, res) => {
  try {
    const post = await Post.find().populate("category", 'name').populate("author");
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (err) {
    res.json({
      status: "failed",
      error: err.message,
    });
  }
};
const createPost = async (req, res) => {
  const { title, description, image ,category} = req.body;
  try {
    cloudinary.config({
      cloud_name: "mychat",
      api_key: "248311999159469",
      api_secret: "Hfn53Xh4NIbXgGNktmioZ2p1Tiw",
      secure: true,
    });
    const response = await cloudinary.v2.uploader.upload(image, {
        resource_type: "image",
        folder: "images",
        height: 400,
        width: 400,
        quality: "auto",
        crop: "scale",
      });
    
    console.log(response)   
    const post = await Post.create({
      title,
      description,
      image:response.secure_url,
      imageId:response.public_id,
      author:req.user_id,
      category:category
    });
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (err) {
    console.log(err)
    res.json({
      status: "failed",
      error: err.message,
    });
  }
};
const getPostCategory = async(req,res)=>{
  const {categoryId} = req.params
 
  try {
    let cate= await Category.find() 
    console.log(cate)
    let category = await Post.findById()
  } catch(err) {
    console.log(err)
  }
}
const getSinglePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById({ _id: id });
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "failed",
      error: err.message,
    });
  }
};
const updatePost = async (req, res) => {
  const { title, description, image, author } = req.body;
  const { id } = req.params;
  const post = await Post.findById({ _id: id });
  try {
    if (title) {
      post.title = title;
    }
    if (description) {
      post.description = description;
    }
    if (image) {
      post.image = image;
    }
    if (author) {
      post.author = author;
    }
    post.save();
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (err) {
    res.status(402).json({
      status: "failed",
      error: err.message,
    });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete({ _id: id });
    res.status(200).json({
      status: "success",
      message: "successfully deleted",
    });
  } catch (err) {
    res.status({
      status: "failed",
      error: err.message,
    });
  }
};

export { getAllPost, createPost, updatePost, deletePost, getSinglePost ,getPostCategory};
