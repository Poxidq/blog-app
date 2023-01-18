import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { db } from "../db";

export const register = (req: Request, res: Response) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (Array.isArray(data) && data.length)
      return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    db.query(q, [values], (err, _data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req: Request, res: Response) => {
  // CHECK USER
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (Array.isArray(data) && data.length === 0)
      return res.status(404).json("User not found!");

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    // console.log("created token: ", token);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { _password, ...other } = data[0];
    // console.log("Other: ", other);
    res
      .cookie("access_token", token, { httpOnly: false })
      .status(200)
      .json(other);
  });
};

export const logout = (req: Request, res: Response) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
