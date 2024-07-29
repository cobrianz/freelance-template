import React from "react";
const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="navbar-right">
        <div className="logo">
          <h1>BRI-<span>UP</span></h1>

        </div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Browse Jobs</a></li>
          <li><a href="">Users</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contacts</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="loginn"></a>
        <input type="search"/>
        <span>Become a seller</span>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
