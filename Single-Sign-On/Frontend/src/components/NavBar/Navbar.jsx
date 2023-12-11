import React from "react";
import "./navbar.css";
import home_logo from "../assests/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <a className="navbar-brand" href="/home">
          <img src={home_logo} alt="Logo here" width="200" height="150" />
        </a>
        <div className="container-fluid">
          <a className="navbar-brand-home m-3" href="/">
            Home
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="dropdown">
                  <button className="dropbtn m-3">What We Do</button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <hr class="dropdown-hr"/>
                    <a href="#">Link 2</a>
                    <hr class="dropdown-hr"/>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="dropbtn m-3">Get Help</button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </li>
              <div className="dropdown">
                <button className="dropbtn m-3">Get Involved</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn m-3">About</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn m-3">News & Blog</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
