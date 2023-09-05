
const express = require("express");
const cors = require("cors")

const port = process.env.PORT || 5001;

const deezerRouter = require("./deezer/routes");

const app = express();

app.use(cors())
app.use(express.json());

app.use(deezerRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "api is working" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});