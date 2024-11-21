import express from "express";

const routes = (app) => {
  // Allows the server to interpret requests with bodies in JSON format
  app.use(express.json());
  // Route to get all posts
  app.get("/posts", async (req, res) => {
    // Calls the function to get all posts
    const posts = await getAllPosts();
    // Sends an HTTP answer with status 200 (OK) and the posts in JSON format
    res.status(200).json(posts);
  });
};

export default routes;
