import React from "react";
import { Link } from "react-router-dom";

import { HomeComponent, HomePosts, HomePostContent, HomePostImageComponent, HomePost } from "../styles/home";


const Home = () => {
    // sample data to check design
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://media.tenor.com/Ts8riJu6rmIAAAAd/bocchi-the-rock-kikuri-hiroi.gif",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://media.tenor.com/r_o5CDFmws8AAAAC/k-on-anime.gif",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://media.tenor.com/qg4Ck93-iH4AAAAM/kurapika-hxh.gif",
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://media.tenor.com/5WjGQ_D8yL0AAAAC/blink-tokyo-ghoul.gif",
        },
    ];
    return (
        <HomeComponent>
            <HomePosts>
                {posts.map((post) => (
                    <HomePost key={post.id}>
                            <HomePostImageComponent>
                                <img src={post.img} alt="" />
                            </HomePostImageComponent>
                        <HomePostContent>
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
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