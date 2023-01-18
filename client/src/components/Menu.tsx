import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { PostsItem } from "@/types/posts.d";

import { MenuComponent, MenuPostComponent } from "@/styles/menu";

function Menu({ cat, parentId }: { cat: string; parentId: number }) {
  const [posts, setPosts] = useState<Array<PostsItem>>([]);
  const fetchPosts = async ({ cat = "" }: { cat?: string }) => {
    return await axios
      .get(`${import.meta.env.VITE_SERVER_URL}/api/posts?cat=${cat}`)
      .then((res) => setPosts(res.data));
  };
  const { isLoading, error, data } = useQuery(["posts", { cat }], () =>
    fetchPosts({ cat })
  );
  return (
    <MenuComponent>
      <h1>Other posts you may like</h1>
      {posts
        .filter((post) => post.id != parentId)
        .map((post) => (
          <MenuPostComponent key={post?.id}>
            <img src={`../upload/${post?.img}`} alt="" />
            <h2>{post?.title}</h2>
            <Link to={`/post/${post?.id}`}>
              <button>Read More</button>
            </Link>
          </MenuPostComponent>
        ))}
    </MenuComponent>
  );
}

export default Menu;
