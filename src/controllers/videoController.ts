
import * as express from "express"; 
import { IVideo } from "../models/video";

let Video = require('./Videos.model');

export const home = (req:express.Request, res:express.Response) => {
  console.log("Start");
  Video.find({}, (error, videos) => {
    console.log("Finished");
    return res.render("home", { pageTitle: "Home", videos });
  });
  console.log("I finish first");
};

export const watch = (req:express.Request, res:express.Response) => {
  const id:number = Number(req.params.id);
  return res.render("watch", { pageTitle: `Watching` });

};

export const getEdit = (req:express.Request, res:express.Response) => {
  const id:number = Number(req.params.id);
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req:express.Request, res:express.Response)  => {
  const id:number = Number(req.params.id);
  // req.body is only with POST
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const upload = (req:express.Request, res:express.Response)  => {};

export const deleteVideo = (req:express.Request, res:express.Response)  => {};
