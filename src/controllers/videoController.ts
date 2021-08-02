
import * as express from "express"; 

export const trending = (req:express.Request, res:express.Response)  => res.send("Home Page Videos");
export const see = (req:express.Request, res:express.Response) => {
    return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req:express.Request, res:express.Response) => res.send("Edit");
export const search = (req:express.Request, res:express.Response) => res.send("Search");
export const upload = (req:express.Request, res:express.Response) => res.send("Upload");
export const deleteVideo = (req:express.Request, res:express.Response) => res.send("Delete Video");