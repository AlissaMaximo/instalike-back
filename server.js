import express from "express";

const posts = [
  {
    description: "A test photo",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0MCsAkUslCPKb7yDmvFfqAHaE8%26pid%3DApi&f=1&ipt=efa7b13db6ceaa63cd117ac248c8b77cc624235f54706587fb37ace40a5f8662&ipo=images",
  },
  {
    description: "Second test photo",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8IQr8-HfRvzaHTytRgF09QHaEK%26pid%3DApi&f=1&ipt=e1e229a460546c576120445d83b83aeeb41f35e86d5fd5070caa541dbb625ea4&ipo=images",
  },
  {
    description: "Third photo for test",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.worldatlas.com%2Fr%2Fw1200%2Fupload%2F7a%2Fce%2Fe3%2Fshutterstock-555976447.jpg&f=1&nofb=1&ipt=a214432bb695e3fda917d503f8ae95b6d08e0b8c1ff2dea679008569e4d8941f&ipo=images",
  },
];

const app = express();
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
  res
    .status(200)
    .send("Boas vindas à imersão! Você conseguiu navegar em uma página!");
});
