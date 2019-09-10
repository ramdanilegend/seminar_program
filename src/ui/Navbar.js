import React from "react";
import Logo from "../res/img/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img src={Logo} alt="Logo" width="30" height="30" />
          Griyasisapp
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
