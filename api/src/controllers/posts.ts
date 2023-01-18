import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { db } from "../db";

export const getPosts = (req: Request, res: Response) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req: Request, res: Response) => {
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req: Request, res: Response) => {
  const token = req.cookies.access_token;
  // console.log("cookies?", req.cookies);
  // console.log("[add post] token: ", token);
  if (!token) return res.status(401).json("Not authenticated!");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jwt.verify(token, "jwtkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    db.query(q, [values], (err, _data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req: Request, res: Response) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    db.query(q, [postId, userInfo.id], (err, _data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};

export const updatePost = (req: Request, res: Response) => {
  const token = req.cookies.access_token;
  // console.log("[update post]  params: ", req.params);
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    db.query(q, [...values, postId, userInfo.id], (err, _data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  });
};

export const uploadPost = async (req: Request, res: Response) => {
  const file = req.file;
  console.log("FIle upload: ", file);
  console.log("FIle upload: ");
  console.dir(req.body);
  if (file != undefined) {
    console.log("sending response to upload");
    res.status(200).json(file.filename);
  } else {
    res.status(200).json({ message: "Upload failed" });
  }
};
