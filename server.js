import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
const connection = await conectarAoBanco(process.env.CONNECTION_STRING);

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

async function getAllPosts() {
  const db = connection.db("imersao-instabytes");
  const collection = db.collection("posts");
  return collection.find().toArray();
}

app.get("/posts", async (req, res) => {
  const posts = await getAllPosts();
  res.status(200).json(posts);
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
