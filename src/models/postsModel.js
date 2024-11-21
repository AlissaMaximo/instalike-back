import conectarAoBanco from "../config/dbConfig.js";

// Connects to the database using the connection string given as an environment variable.
const connection = await conectarAoBanco(process.env.CONNECTION_STRING);

// Asynchronous function to get all posts from database
export default async function getAllPosts() {
  // Selects the database "imersao-instabytes"
  const db = connection.db("imersao-instabytes");
  // Selects the collection "posts" inside the database
  const collection = db.collection("posts");
  // Returns an array with all collection documents
  return collection.find().toArray();
}
