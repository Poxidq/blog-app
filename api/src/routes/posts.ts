import express from "express";
import multer from "multer";

import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
  uploadPost,
} from "../controllers/posts";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    console.dir(req.body);
    cb(null, "req.body.data.title +  + req.body.data.id");
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), uploadPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;
