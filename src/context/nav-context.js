import React, { useState } from "react";

export const NavContext = React.createContext({
  navOn: "",
  initial: () => {},
});

const NavContextProvider = (props) => {
  const [navOn, setNavOn] = useState("initial");

  const first = (event) => {
    event.preventDefault();
    console.log(event.target.name);
    setNavOn(event.target.name);
  };

  return (
    <NavContext.Provider
      value={{
        navOn: navOn,
        initial: first,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};
//* Context component carries the values here as an object -- Any items wrapped by this component ( index.js, here) and useContext can call any of these methods/values

export default NavContextProvider;
