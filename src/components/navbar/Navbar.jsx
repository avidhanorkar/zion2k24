import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const showSidebar = () => {
    document.querySelector(".sidebar").style.display = "flex";
  };
  const closeSidebar = () => {
    document.querySelector(".sidebar").style.display = "none";
  };
  return (
    <div className="navbar">
      <div className="container">
        {/* <div className="logoContainer">
          <img className="logoImg" src="assets/navlogo.png" alt="" />
        </div> */}
        <div className="nav-elements">
          <ul className="sidebar">
            <li>
              <svg
                class="close-btn"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </li>
            <li>
              <a
                onClick={closeSidebar}
                href="#home"
                className="sideLinks"
                activeClassName="activeLink"
              >
                Home1
              </a>
            </li>
            <li>
              <a
                onClick={closeSidebar}
                href="#about"
                className="sideLinks"
                activeClassName="activeLink"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#domain"
                onClick={closeSidebar}
                className="sideLinks"
                activeClassName="activeLink"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                onClick={closeSidebar}
                className="sideLinks"
                activeClassName="activeLink"
              >
                Contact
              </a>
            </li>
            {/* <li>
              <a
                onClick={closeSidebar}
                href="#prizes"
                className="sideLinks"
                activeClassName="activeLink"
              >
                Prizes
              </a>
            </li> */}
            {/* <li>
              <a
                href="#sponsors"
                onClick={closeSidebar}
                className="sideLinks"
                activeClassName="activeLink"
              >
                Sponsors
              </a>
            </li> */}
            {/* <li>
              <a
                onClick={closeSidebar}
                href="#team"
                className="sideLinks"
                activeClassName="activeLink"
              >
                Team
              </a>
            </li> */}
            <li>
              <a
                href="#faq"
                onClick={closeSidebar}
                className="sideLinks"
                activeClassName="activeLink"
              >
                FAQ
              </a>
            </li>
            {/* <li>
              <a
                href="#contact"
                className="sideLinks"
                onClick={closeSidebar}
                activeClassName="activeLink"
              >
                Contact
              </a>
            </li> */}
          </ul>
          <ul className="navList">
            <li>
              <a href="#home" className="navLinks" activeClassName="activeLink">
                Home11
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="navLinks"
                activeClassName="activeLink"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#domain"
                className="navLinks"
                activeClassName="activeLink"
              >
                Team
              </a>
            </li>
            <li>
              <div className="logoContainer">
                <img className="logoImg" src="assets/navlogo.png" alt="" />
              </div>
            </li>
            <li>
              <a
                href="#schedule"
                className="navLinks"
                activeClassName="activeLink"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#prizes"
                className="navLinks"
                activeClassName="activeLink"
              >
                Prizes
              </a>
            </li>
            {/* <li>
              <a
                href="#sponsors"
                className="navLinks"
                activeClassName="activeLink"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a href="#team" className="navLinks" activeClassName="activeLink">
                Team
              </a>
            </li> */}
            <li>
              <a href="#faq" className="navLinks" activeClassName="activeLink">
                FAQ
              </a>
            </li>
            {/* <li>
              <a
                href="#contact"
                className="navLinks"
                activeClassName="activeLink"
              >
                Contact
              </a>
            </li> */}
            <li className="svg">
              <NavLink className="navLinks menu-btn">
                <svg
                  class="menu-btn"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </NavLink>
            </li>
          </ul>
          <nav className="nav-elements">
            <ul className="sidebar">
              <li className="close-btn">
                <svg
                  onClick={closeSidebar}
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 -960 960 960"
                  width="30"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Schedule">Events</a>
              </li>
              <li>
                <a href="#Prizes">Team</a>
              </li>
              <li>
                <a href="#Sponsors">Contact</a>
              </li>
              <li>
                <a href="#FAQ">FAQ</a>
              </li>
              {/* <li>
                <a href="#EventTeam">EventTeam</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
