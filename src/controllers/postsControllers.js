import getAllPosts from "../models/postsModel.js";

export async function listPosts(req, res) {
  // Calls the function to get all posts
  const posts = await getAllPosts();
  // Sends an HTTP answer with status 200 (OK) and the posts in JSON format
  res.status(200).json(posts);
}
