import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { useLocation } from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';

import { AddComponent, AddContentComponent, AddEditorContainer, AddMenu, AddCatComponent, AddMenuItem, AddMenuItemButtons, AddMenuItemFile } from '../styles/write';

export default function Write() {
    const state = useLocation().state;
    const [value, setValue] = useState("");
    const [title, setTitle] = useState(state?.desc || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");
    console.log(file);
    return (
        <AddComponent>

            <AddContentComponent>
                <input
                    type="text"
                    placeholder="Title"
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
                        <button>Save as a draft</button>
                        <button onClick={(e: any) => console.log(e.target)}>Publish</button>
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