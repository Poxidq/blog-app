import React from 'react'

import { MenuComponent, MenuPostComponent } from '../styles/menu';

function Menu() {
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
        <MenuComponent>
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <MenuPostComponent key={post.id}>
                    <img src={post?.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </MenuPostComponent>
            ))}
        </MenuComponent>
    )
}

export default Menu