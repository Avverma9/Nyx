import React from "react";
import { Menu, Image} from "semantic-ui-react";
import "./Header.css";

function Header() {
  return (
    <Menu inverted className="header">
      <Menu.Item>
        <a href="/about" className="header__link header__logo">
          <Image
            src={
              "https://avverma.s3.ap-south-1.amazonaws.com/1684658519082-Untitled-removebg-preview%20%281%29.png"
            }
            alt="Logo"
            size="tiny"
          />
        </a>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
        <a href="/dashboard" className="header__link">
            Dashboard
          </a>
          <a href="/homepage" className="header__link">
            Home
          </a>

          <a href="/about" className="header__link">
            About
          </a>

          <a href="/contact" className="header__link">
            Contact
          </a>
          <a href="/admin" className="header__link">
            Admin
          </a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
