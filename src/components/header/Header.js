import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import HeaderLogo from "./HeaderLogo";
import "./style.css";
import HeaderTop from "./HeaderTop";

export default class Header extends Component {
  render() {
    return (
      <div>
        <HeaderTop />
        <HeaderLogo />
        <HeaderMenu />
      </div>
    );
  }
}
