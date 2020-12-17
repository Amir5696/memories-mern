import React, { Fragment } from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <Fragment>
      <div>Posts</div>
      <Post />
      <Post />
    </Fragment>
  );
};

export default Posts;
