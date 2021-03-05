import classes from "./Landing.module.css";
import { Transition } from "react-transition-group";
import React, { useContext } from "react";
import { NavContext } from "../../context/nav-context";
//?DONT FORGET THOSE BRACKETS JON

const Landing = (props) => {
  const navContext = useContext(NavContext);

  return (
    <nav
      className={
        navContext.navOn === "initial"
          ? classes.NavInitial
          : classes.NavInitialAnimate
      }
    >
      <Transition timeout={4000} in={true} appear={true}>
        {(status) => (
          <div className={`Landing Landing-${status}`}>
            <a
              href="/"
              name="blog"
              onClick={(event) => {
                navContext.initial(event);
              }}
            >
              Blog
            </a>
            <a href="/">Tech</a>
            <a href="/">Contact</a>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Landing;
