import { getAllPosts, createPost } from "../models/postsModel.js";

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
    console.error(erro.message);
    res.status(500).json({ Error: "Request failed" });
  }
}

export async function uploadImage(req, res) {
  const newPost = {
    description: "",
    imgUrl: req.file.originalName,
    alt: "",
  };

  try {
    // Calls the function from postsModel.js to create a post
    const createdPost = await createPost(newPost);
    // Sends an HTTP answer with status 200 (OK) and the created post in JSON format
    res.status(200).json(createdPost);
  } catch (error) {
    // When fails, shows internal server error and shows in the console the error message.
    console.error(erro.message);
    res.status(500).json({ Error: "Request failed" });
  }
}
