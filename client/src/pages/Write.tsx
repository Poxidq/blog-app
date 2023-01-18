import React, { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";

// import { AuthContext } from '../context/authContext';
import { PostsItem } from "@/types/posts.d";

import "react-quill/dist/quill.snow.css";

import {
  AddComponent,
  AddContentComponent,
  AddEditorContainer,
  AddMenu,
  AddCatComponent,
  AddMenuItem,
  AddMenuItemButtons,
  AddMenuItemFile,
} from "@/styles/write";
import { stringify } from "querystring";

axios.defaults.withCredentials = true;

export default function Write() {
  // validate data
  const state = useLocation();
  //   const [file, setFile] = useState(null);
  const [values, setValues] = useState<{
    value?: string;
    file?: any;
    title?: string;
    cat?: string;
  }>({
    value: "",
    title: "",
    file: null,
    cat: "",
  });
  const navigate = useNavigate();

  let _id = state.search;
  const fetchPosts = async () => {
    if (_id != "") {
      _id = state.search.split("=")[1];
      return await axios
        .get(`${import.meta.env.VITE_SERVER_URL}/api/posts/${_id}`)
        .then((res) => {
          console.log(JSON.stringify(res.data));
          setValues({
            value: res.data?.desc,
            title: res.data?.title,
            file: res.data?.img,
            cat: res.data?.cat,
          });
        });
    } else {
      setValues({
        value: "",
        title: "",
        file: null,
        cat: "",
      });
      return null;
    }
  };
  const { isLoading, error, data } = useQuery("post", fetchPosts, {
    refetchOnWindowFocus: false,
  });
  const handleChange = (e: React.ChangeEvent<any>) => {
    // console.log(`name: ${e.target.name}; val: ${e.target.value}`);
    if (e.target.name == "file") {
      console.log(`file: ${e.target.files[0]}`);
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const handleChangeQuill = (str: any) => {
    // console.log(`Quill val: ${str}`);
    setValues((prev) => ({ ...prev, value: str }));
  };
  const upload = async () => {
    try {
      const formData = new FormData();
      const blob = values.file.slice(0, values.file.size);

      const newFile = new File(
        [blob],
        `${Date.now()}.${
          values.file.name.split(".")[values.file.name.split(".").length - 1]
        }`,
        {
          type: "image/png",
        }
      );
      formData.append("file", newFile);

      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/posts/upload`,
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    let imgUrl: string = "";
    if (values.file != null && typeof values.file != "string") {
      //   console.log("file: ", values.file);
      imgUrl = await upload();
    }

    try {
      state.search.length != 0
        ? await axios.put(
            `${import.meta.env.VITE_SERVER_URL}/api/posts/${
              state.search.split("=")[1]
            }`,
            {
              title: values.title,
              desc: values.value,
              cat: values.cat,
              img: imgUrl ? imgUrl : values.file,
            }
          )
        : await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/posts/`, {
            title: values.title,
            desc: values.value,
            cat: values.cat,
            img: imgUrl ? imgUrl : values.file,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AddComponent>
      <AddContentComponent>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <AddEditorContainer>
          <ReactQuill
            theme="snow"
            // name="value"
            value={values.value}
            onChange={handleChangeQuill}
          />
        </AddEditorContainer>
      </AddContentComponent>
      <AddMenu>
        <AddMenuItem>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
          />
          <AddMenuItemFile htmlFor="file">Upload Image</AddMenuItemFile>
          <AddMenuItemButtons>
            {/* <button>Save as a draft</button> */}
            <button onClick={handleClick}>Publish</button>
          </AddMenuItemButtons>
        </AddMenuItem>
        <AddMenuItem>
          <h1>Category</h1>
          <AddCatComponent>
            <input
              type="radio"
              checked={values.cat === "art"}
              name="cat"
              value="art"
              id="art"
              onChange={handleChange}
            />
            <label htmlFor="art">Art</label>
          </AddCatComponent>
          <AddCatComponent>
            <input
              type="radio"
              checked={values.cat === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={handleChange}
            />
            <label htmlFor="science">Science</label>
          </AddCatComponent>
          <AddCatComponent>
            <input
              type="radio"
              checked={values.cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
              onChange={handleChange}
            />
            <label htmlFor="technology">Technology</label>
          </AddCatComponent>
          <AddCatComponent>
            <input
              type="radio"
              checked={values.cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
              onChange={handleChange}
            />
            <label htmlFor="cinema">Cinema</label>
          </AddCatComponent>
          <AddCatComponent>
            <input
              type="radio"
              checked={values.cat === "design"}
              name="cat"
              value="design"
              id="design"
              onChange={handleChange}
            />
            <label htmlFor="design">Design</label>
          </AddCatComponent>
          <AddCatComponent>
            <input
              type="radio"
              checked={values.cat === "food"}
              name="cat"
              value="food"
              id="food"
              onChange={handleChange}
            />
            <label htmlFor="food">Food</label>
          </AddCatComponent>
        </AddMenuItem>
      </AddMenu>
    </AddComponent>
  );
}
