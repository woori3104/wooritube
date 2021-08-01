import * as express from "express"; 

export const join = (req:express.Request, res:express.Response) => res.send("Join");
export const edit = (req:express.Request, res:express.Response) => res.send("Edit User");
export const remove = (req:express.Request, res:express.Response) => res.send("Remove User");
