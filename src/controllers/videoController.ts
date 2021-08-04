
import * as express from "express"; 

let videos : {
  title:string;
  rating:number;
  comments:number;
  createdAt:string;
  views:number;
  id:number;
}[] = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req:express.Request, res:express.Response) => {
  const videos = [
    {
      title: "Hello",
      id:1
    },
    {
      title: "Video #2",
      id:2
    },
    {
      title: "Whatsup",
      id:3
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req:express.Request, res:express.Response) => {
  const id:number = Number(req.params.id);
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req:express.Request, res:express.Response) => {
  const id:number = Number(req.params.id);
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req:express.Request, res:express.Response)  => {
  const id:number = Number(req.params.id);
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const upload = (req:express.Request, res:express.Response)  => {};
export const deleteVideo = (req:express.Request, res:express.Response)  => {};
