import React from "react";

export /*bundle*/ function Nav() {
  return (
    <nav className="header">
      <div className="nav-doc">
        <h1 className="logo">
          bgroup/ui <span className="logo__thin">Doc</span>
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
              <i className="fa fa-github"></i> Github
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
        </ul>
      </div>
    </nav>
  );
}
