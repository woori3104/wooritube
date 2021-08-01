import * as express from "express";

const globalRouter = express.Router();

const handleHome = (req:express.Request, res:express.Response) => res.send("Home");

globalRouter.get("/", handleHome);

export default globalRouter;