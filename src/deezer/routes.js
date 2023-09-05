const { Router } = require("express");
const deezerRouter = Router();
const { getMusic} = require("./controllers");

deezerRouter.get("/deezer/getUsers", getMusic) //protected endpoint


module.exports = deezerRouter;