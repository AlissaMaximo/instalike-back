import express from "express";
import { listPosts } from "../controllers/postsControllers.js";

const routes = (app) => {
  // Allows the server to interpret requests with bodies in JSON format
  app.use(express.json());
  // Route to get all posts
  app.get("/posts", listPosts);
};

export default routes;
