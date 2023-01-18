import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import { PostsItem } from "types/posts"

import { HomeComponent, HomePosts, HomePostContent, HomePostImageComponent, HomePost } from "@styles/home";

const Home = () => {
    const [posts, setPosts] = useState<Array<PostsItem>>([]);
    const cat = useLocation().search || ""; // returns "?cat={string}"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/posts${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log("Error", err);
            }
        };
        fetchData();
    }, [cat]);

    const getText = (html: string) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
    return (
        <HomeComponent>
            <HomePosts>
                {posts.map((post) => (
                    <HomePost key={post.id}>
                        <HomePostImageComponent>
                            <img src={`upload/${post.img}`} alt="" />
                        </HomePostImageComponent>
                        <HomePostContent>
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p>
                            <Link to={`/post/${post.id}`}>
                                <button>Read More</button>
                            </Link>
                        </HomePostContent>
                    </HomePost>
                ))}
            </HomePosts>
        </HomeComponent>
    )
}

export default Home;