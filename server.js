import express from "express";
import routes from "./src/routes/postsRoutes.js";
const app = express();
app.use(express.static("uploads"));
routes(app);

// Starts the server in port 3000 and shows a message in the console
app.listen(3000, () => {
  console.log("Server listening...");
});

function getPostById(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = getPostById(req.params.id);
  res.status(200).json(posts[index]);
});
