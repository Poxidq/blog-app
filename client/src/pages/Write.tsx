import React, { useState, useContext, useEffect } from 'react'
import ReactQuill from 'react-quill';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import moment from "moment";

// import { AuthContext } from '../context/authContext';
import { PostsItem } from "types/posts.d"

import 'react-quill/dist/quill.snow.css';

import { AddComponent, AddContentComponent, AddEditorContainer, AddMenu, AddCatComponent, AddMenuItem, AddMenuItemButtons, AddMenuItemFile } from '@styles/write';

axios.defaults.withCredentials = true;

export default function Write() {
    // validate data
    const state = useLocation();
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const _id = state.search.split("=")[1].length > 0 ? state.search.split("=")[1] : "";
        const fetchData = async () => {
            const data: PostsItem = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/posts/${_id}`)
            setValue(data?.desc);
            setTitle(data?.title);
        };
        fetchData();
    }, [])

    // const { currentUser } = useContext(AuthContext);
    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file || "");
            console.log("WRITE FILE CONSOLE LOGGGGG file:");
            console.dir(file);
            const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/posts/upload`, formData);
            console.log("res: ", res);
            console.dir(res);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = async (e: any) => {
        e.preventDefault();
        const imgUrl: string = await upload();
        console.log("IMGURL: ", imgUrl);
        try {
            state.search.length != 0
                ? await axios.put(`${import.meta.env.VITE_SERVER_URL}/api/posts/${state.search.split("=")[1]}`, {
                    title,
                    desc: value,
                    cat,
                    img: file ? imgUrl : "",
                })
                : await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/posts/`, {
                    title,
                    desc: value,
                    cat,
                    img: file ? imgUrl : "",
                    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                });
            navigate("/")
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <AddEditorContainer>
                    <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
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
                        name=""
                        onChange={(e: any) => setFile(e.target.files[0])}
                    />
                    <AddMenuItemFile htmlFor='file'>
                        Upload Image
                    </AddMenuItemFile>
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
                            checked={cat === "art"}
                            name="cat"
                            value="art"
                            id="art"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="art">Art</label>
                    </AddCatComponent>
                    <AddCatComponent>
                        <input
                            type="radio"
                            checked={cat === "science"}
                            name="cat"
                            value="science"
                            id="science"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="science">Science</label>
                    </AddCatComponent>
                    <AddCatComponent>
                        <input
                            type="radio"
                            checked={cat === "technology"}
                            name="cat"
                            value="technology"
                            id="technology"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="technology">Technology</label>
                    </AddCatComponent>
                    <AddCatComponent>
                        <input
                            type="radio"
                            checked={cat === "cinema"}
                            name="cat"
                            value="cinema"
                            id="cinema"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="cinema">Cinema</label>
                    </AddCatComponent>
                    <AddCatComponent>
                        <input
                            type="radio"
                            checked={cat === "design"}
                            name="cat"
                            value="design"
                            id="design"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="design">Design</label>
                    </AddCatComponent>
                    <AddCatComponent>
                        <input
                            type="radio"
                            checked={cat === "food"}
                            name="cat"
                            value="food"
                            id="food"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="food">Food</label>
                    </AddCatComponent>
                </AddMenuItem>
            </AddMenu>
        </AddComponent >
    )
}