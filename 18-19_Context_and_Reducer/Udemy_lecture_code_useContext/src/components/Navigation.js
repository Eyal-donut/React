import React, { useContext } from "react";
import MyContext from "../context/context";

const Navigation = () => {
  const ctx = useContext(MyContext);

  return (
    <nav>
      <ul>
        {ctx.isLoggedIn && <li>nav link</li>}
        {ctx.isLoggedIn && <button onClick={ctx.onLogout}>Logout</button>}
      </ul>
    </nav>
  );
};

export default Navigation;
