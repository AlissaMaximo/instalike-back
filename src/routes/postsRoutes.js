import express from "express";
import { listPosts, publishNewPost } from "../controllers/postsControllers.js";

const routes = (app) => {
  // Allows the server to interpret requests with bodies in JSON format
  app.use(express.json());
  // Route to get (read) all posts
  app.get("/posts", listPosts);
  // Route to create a post
  app.post("/posts", publishNewPost);
};

export default routes;
