import React from "react";
import "../../components/Navbar/Navbar.css";

const Navbar = () => {

  const showSideBar = () => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
  }

  const hideSideBar = () => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
  }

  return (
    <div>
      <nav>
      <ul className="sidebar">
      <li  onClick={hideSideBar}>
            <a><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
          </li>
          <li >
            <a>Home</a>
          </li>
          <li>
            <a>Shoes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Login / Sign up</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Shoes.in</a>
          </li>
          <li className="hideOnMobile">
            <a>Home</a>
          </li>
          <li className="hideOnMobile">
            <a>Shoes</a>
          </li>
          <li className="hideOnMobile">
            <a>About</a>
          </li>
          <li className="hideOnMobile">
            <a>Login / Sign up</a>
          </li>
          <li onClick={showSideBar} className="menu-button">
            <a><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
