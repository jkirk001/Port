import React from "react";
import { Transition } from "react-transition-group";
import classes from "./Blog.module.css";

const Blog = (props) => {
  return (
    <Transition timeout={4000} in={true} appear={true}>
      {(status) => {
        let cssName = classes.Blog;
        if (status === "entering") cssName = classes.BlogEntering;
        if (status === "entered") cssName = classes.BlogEntered;
        return <div className={cssName}>lol</div>;
      }}
    </Transition>
  );
};

export default Blog;
