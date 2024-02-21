import React from "react";
import MenuIcon from "./MenuIcon";
import Avatar from "./Avatar";

function RightMenu() {
  return (
    <nav className="right-menu">
      <ul>
        <li>Gmail</li>
        <li>Images</li>
        <MenuIcon />
        <Avatar />
      </ul>
    </nav>
  );
}

export default RightMenu;
