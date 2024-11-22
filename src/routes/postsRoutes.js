import express from "express";
import {
  listPosts,
  publishNewPost,
  uploadImage,
} from "../controllers/postsControllers.js";
import multer from "multer";

// For Linux or Mac this is the code for multer to manipulate images
const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  // Allows the server to interpret requests with bodies in JSON format
  app.use(express.json());
  // Route to get (read) all posts
  app.get("/posts", listPosts);
  // Route to create a post
  app.post("/posts", publishNewPost);
  // Route to upload a single image through multer, where "image" is the key
  app.post("/upload", upload.single("image"), uploadImage);
};

export default routes;
