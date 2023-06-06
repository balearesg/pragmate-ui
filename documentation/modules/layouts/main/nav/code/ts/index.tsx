import React from "react";
import { ThemeSwitcher } from "pragmate-ui/theme-switcher";

export /*bundle*/ function Nav() {
  return (
    <nav className="header header-main">
      <div className="nav-doc">
        <h1 className="logo logo-main">
          <a href="/">pragmate-ui</a>
        </h1>
        <ul className="menu">
          <div className="menu__item toggle">
            <span></span>
          </div>
          <li className="menu__item">
            <a
              href="https://github.com/balearesg/pragmate-ui"
              className="link link--dark"
            >
              <i className="fa fa-home"></i>Github
            </a>
          </li>
          <li className="menu__item">
            <a href="/doc" className="link link--dark">
              <i className="fa fa-home"></i> Documentación
            </a>
          </li>
          <li className="menu__item">
            <a href="/" className="link link--dark">
              <i className="fa fa-home"></i> Home
            </a>
          </li>
          <li className="menu__item"></li>
          <i>
            <ThemeSwitcher />
          </i>
        </ul>
      </div>
    </nav>
  );
}
