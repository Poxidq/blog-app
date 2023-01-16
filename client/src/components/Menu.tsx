import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import { PostsItem } from "../@types/posts";

import { MenuComponent, MenuPostComponent } from '../styles/menu';

function Menu({ cat }: { cat: string }) {
    const [posts, setPosts] = useState<Array<PostsItem>>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);
    return (
        <MenuComponent>
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <MenuPostComponent key={post?.id}>
                    <img src={post?.img} alt="" />
                    <h2>{post?.title}</h2>
                    <Link to="/"><button>Read More</button></Link>
                </MenuPostComponent>
            ))}
        </MenuComponent>
    )
}

export default Menu