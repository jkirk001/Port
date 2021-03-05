import React, { useContext } from "react";
import Landing from "./container/Landing/Landing";
import Blog from "./components/Blog/Blog";
import "./App.css";
import { NavContext } from "./context/nav-context";

function App() {
  const navContext = useContext(NavContext);

  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
