import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
import moment from "moment";
import { useQuery } from "react-query";

import { SinglePost } from "@/types/posts.d";

import Menu from "@/components/Menu";
import { AuthContext } from "@/context/authContext";

import Edit from "@/media/edit_icon.png";
import Delete from "@/media/delete_icon.svg";
import {
  SingleComponent,
  SingleContentComponent,
  SingleEditComponent,
  SingleInfoComponent,
  SingleUserComponent,
} from "@/styles/single";
import { variables } from "@/styles/variables";

export default function Single() {
  const [post, setPost] = useState<SinglePost>();

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  const fetchPosts = async ({ postId }: { postId: string }) => {
    return await axios
      .get(`${import.meta.env.VITE_SERVER_URL}/api/posts/${postId}`)
      .then((res) => setPost(res.data));
  };
  const { isLoading, error, data } = useQuery(["post", { postId }], () =>
    fetchPosts({ postId })
  );

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/api/posts/${postId}`
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading)
    return (
      <SingleComponent>
        <h2 style={{ color: `${variables.white}` }}>Loading...</h2>
      </SingleComponent>
    );

  if (error)
    return (
      <SingleComponent>
        <h2 style={{ color: `${variables.red}` }}>
          Something bad happened 0-o
        </h2>
      </SingleComponent>
    );
  if (post?.title == undefined) {
    return (
      <SingleComponent>
        <h2 style={{ color: `${variables.white}` }}>Post doesn't exist :(</h2>
      </SingleComponent>
    );
  }
  return (
    <SingleComponent>
      <SingleContentComponent>
        <img src={`../upload/${post?.img}`} alt="" />
        <SingleUserComponent>
          {post?.userImg && <img src={`../upload/${post.userImg}`} alt="" />}
          <SingleInfoComponent>
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </SingleInfoComponent>
          {currentUser && currentUser?.username === post?.username && (
            <SingleEditComponent>
              <Link to={`/write?edit=${post?.id}`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" onClick={handleDelete} />
            </SingleEditComponent>
          )}
        </SingleUserComponent>
        <h1>{post?.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post?.desc || ""),
          }}
        ></p>
      </SingleContentComponent>
      <Menu cat={post?.cat || ""} parentId={post?.id || -1} />
    </SingleComponent>
  );
}
