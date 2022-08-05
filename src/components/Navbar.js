import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../Logo.png";
import "../css/HomePage.css";

const Navbar = () => {
  const [navbar, setnavbar] = useState(false);

  const isBrowser = typeof window !== "undefined";

  if (isBrowser) {
    const changebackground = () => {
      if (window.scrollY >= 200) {
        setnavbar(true);
      } else {
        setnavbar(false);
      }
    };
    window.addEventListener("scroll", changebackground);
  }
  
  return (
    <div className="sticky-top">
      <nav
        className={
          navbar
            ? "navbar active navbar-light bg-light navbar-expand-lg"
            : "navbar navbar-light bg-light navbar-expand-lg"
        }
      >
        <div className="container-fluid">
          <img className="navbar-brand imgsizing" alt="..." src={logo} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mt-2 mt-lg-0" id="ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to={"/"}>
                      Action
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about-us"}>
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Page
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Project
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link class="dropdown-item" to={"/project1"}>
                      Project 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/project2"}>
                      Project 2
                      </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/project3"}>
                      Project 3
                      </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/project4"}>
                      Project 4
                      </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/project5"}>
                      Project 5
                      </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {/* <!-- <a
                                    className="nav-link"
                                    href="#"
                                    id="navbarScrollingDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Blog
                                </a> --> */}
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
