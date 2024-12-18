import express from "express";
import {
  listPosts,
  publishNewPost,
  uploadImage,
  updateNewPost,
} from "../controllers/postsControllers.js";
import multer from "multer";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};

// For Linux or Mac this is the code for multer to manipulate images
const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  // Allows the server to interpret requests with bodies in JSON format
  app.use(express.json());
  app.use(cors(corsOptions));
  // Route to get (read) all posts
  app.get("/posts", listPosts);
  // Route to create a post
  app.post("/posts", publishNewPost);
  // Route to upload a single image through multer, where "image" is the key
  app.post("/upload", upload.single("image"), uploadImage);

  app.put("/upload/:id", updateNewPost);
};

export default routes;
