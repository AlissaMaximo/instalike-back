import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

// Connects to the database using the connection string given as an environment variable.
const connection = await conectarAoBanco(process.env.CONNECTION_STRING);

const app = express();

// Starts the server in port 3000 and shows a message in the console
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

// Asynchronous function to get all posts from database
async function getAllPosts() {
  // Selects the database "imersao-instabytes"
  const db = connection.db("imersao-instabytes");
  // Selects the collection "posts" inside the database
  const collection = db.collection("posts");
  // Returns an array with all collection documents
  return collection.find().toArray();
}

function getPostById(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = getPostById(req.params.id);
  res.status(200).json(posts[index]);
});
