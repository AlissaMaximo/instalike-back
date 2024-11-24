import { getAllPosts, createPost, updatePost } from "../models/postsModel.js";
import fs from "fs";
import generateDescriptionWithGemini from "../services/geminiService.js";

export async function listPosts(req, res) {
  // Calls the function to get all posts
  const posts = await getAllPosts();
  // Sends an HTTP answer with status 200 (OK) and the posts in JSON format
  res.status(200).json(posts);
}

export async function publishNewPost(req, res) {
  const newPost = req.body;
  try {
    // Calls the function from postsModel.js to create a post
    const createdPost = await createPost(newPost);
    // Sends an HTTP answer with status 200 (OK) and the created post in JSON format
    res.status(200).json(createdPost);
  } catch (error) {
    // When fails, shows internal server error and shows in the console the error message.
    console.error(error.message);
    res.status(500).json({ Error: "Request failed" });
  }
}

export async function uploadImage(req, res) {
  const newPost = {
    description: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    // Calls the function from postsModel.js to create a post
    const createdPost = await createPost(newPost);
    // Updated image's server address - the image was uploaded into the server and not into the database
    const updatedImage = `uploads/${createdPost.insertedId}.png`;
    // Renames the image in the server
    fs.renameSync(req.file.path, updatedImage);
    // Sends an HTTP answer with status 200 (OK) and the created post in JSON format
    res.status(200).json(createdPost);
  } catch (error) {
    // When fails, shows internal server error and shows in the console the error message.
    console.error(erro.message);
    res.status(500).json({ Error: "Request failed" });
  }
}

export async function updateNewPost(req, res) {
  const id = req.params.id;
  const urlImg = `http://localhost:3000/${id}.png`;
  try {
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
    const description = await generateDescriptionWithGemini(imgBuffer);
    const post = {
      imgUrl: urlImg,
      description: description,
      alt: req.body.alt,
    };
    // Calls the function from postsModel.js to create a post
    const updatedPost = await updatePost(id, post);
    // Sends an HTTP answer with status 200 (OK) and the created post in JSON format
    res.status(200).json(updatedPost);
  } catch (error) {
    // When fails, shows internal server error and shows in the console the error message.
    console.error(error.message);
    res.status(500).json({ Error: "Request failed" });
  }
}
