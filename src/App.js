import React, { useContext, useEffect, useState } from "react";

import Landing from "./container/Landing/Landing";
import Blog from "./components/Blog/Blog";
import "./App.css";
import { NavContext } from "./context/nav-context";

function App() {
  const navContext = useContext(NavContext);
  const [main, setMain] = useState(null);

  console.log(main);

  useEffect(() => {
    if (navContext.navOn === "initial" || main === 1) return;
    const timer = setTimeout(() => {
      setMain(1);
    }, 2500);

    return () => clearTimeout(timer);
  }, [navContext.navOn, main]);

  return (
    <div className="App">
      <Landing />
      {main === 1 ? <Blog /> : "lol"}
    </div>
  );
}

export default App;
