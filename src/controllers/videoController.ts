
import * as express from "express"; 
import Video from "../models/Video";

export const home = async (req:express.Request, res:express.Response) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
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


export const getUpload = (req:express.Request, res:express.Response) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req:express.Request, res:express.Response) => {
  const { title, description, hashtags } : {title: string, description: string, hashtags :string}= req.body;
  const video = new Video({
    title: title,
    description: description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word:string) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  console.log(video);
  return res.redirect("/");
};

export const deleteVideo = (req:express.Request, res:express.Response)  => {};
