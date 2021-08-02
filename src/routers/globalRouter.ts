import * as express from "express";

const globalRouter = express.Router();

const handleHome = (req:express.Request, res:express.Response) => res.send("Home");
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";

globalRouter.get("/", handleHome);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;