
import * as express from "express"; 

export const trending = (req:express.Request, res:express.Response) => res.render("home", { pageTitle: "Home" });
export const see = (req:express.Request, res:express.Response)  => res.render("watch");
export const edit = (req:express.Request, res:express.Response) => res.render("edit");
export const search = (req:express.Request, res:express.Response) => res.send("Search");
export const upload = (req:express.Request, res:express.Response) => res.send("Upload");
export const deleteVideo = (req:express.Request, res:express.Response) => res.send("Delete Video");