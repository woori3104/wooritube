
import * as express from "express"; 

export const trending = (req:express.Request, res:express.Response)  => res.send("Home Page Videos");
export const watch = (req:express.Request, res:express.Response) => res.send("Watch");
export const edit = (req:express.Request, res:express.Response)  => res.send("Edit");