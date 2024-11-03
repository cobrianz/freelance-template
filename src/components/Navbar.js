import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar container">
        <div className="navbar-logo">
          <h1 className="logo">
            BI<span>VO</span>
          </h1>
          <span>
            <i class="ph ph-list"></i>
          </span>
        </div>
        <div className="navbar-right">
          <div className="search-container">
            <div className="search-left">
              <button>
                <i class="ph ph-magnifying-glass"></i>
              </button>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="search-right">
              <select name="" id="">
                <option value="1">
                  <i class="ph ph-users"></i> Freelancer
                </option>
                <option value="2">
                  <i class="ph ph-rows"></i>Services
                </option>
                <option value="3">
                  <i class="ph ph-book"></i> Projects
                </option>
              </select>
            </div>
          </div>
          <a className="signin">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
