import * as express from "express"; 

export const join = (req:express.Request, res:express.Response) => res.send("Join");
export const edit = (req:express.Request, res:express.Response) => res.send("Edit User");
export const remove = (req:express.Request, res:express.Response) => res.send("Remove User");
export const login = (req:express.Request, res:express.Response) => res.send("Login");
export const logout = (req:express.Request, res:express.Response) => res.send("Log out");
export const see = (req:express.Request, res:express.Response) => res.send("See User");