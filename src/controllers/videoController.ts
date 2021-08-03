
import * as express from "express"; 

const fakeUser = {
  username: "woori",
  loggedIn: true,
};
export const trending = (req:express.Request, res:express.Response) => {
  const videos = [
    {
      title: "Hello",
    },
    {
      title: "Video #2",
    },
    {
      title: "Whatsup",
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};

export const see = (req:express.Request, res:express.Response)  => res.render("watch");
export const edit = (req:express.Request, res:express.Response) => res.render("edit");
export const search = (req:express.Request, res:express.Response) => res.send("Search");
export const upload = (req:express.Request, res:express.Response) => res.send("Upload");
export const deleteVideo = (req:express.Request, res:express.Response) => res.send("Delete Video");