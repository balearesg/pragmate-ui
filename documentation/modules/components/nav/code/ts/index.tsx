import React from "react";
import { ThemeSwitch } from "@bgroup/ui/theme-switch";

export /*bundle*/ function Nav() {
  return (
    <nav className="header header-main">
      <div className="nav-doc">
        <h1 className="logo logo-main">
          <a href="/">
            bgroup/ui <span className="logo__thin">Doc</span>
          </a>
        </h1>
        <ul className="menu">
          <div className="menu__item toggle">
            <span></span>
          </div>
          <li className="menu__item">
            <a
              href="https://github.com/balearesg/bgroup-ui/tree/main"
              className="link link--dark"
            >
              <i className="fa fa-github">
                <a href="https://github.com/balearesg/bgroup-ui">Github</a>
              </i>
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
            <ThemeSwitch />
          </i>
        </ul>
      </div>
    </nav>
  );
}
