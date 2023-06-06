import * as React from "react";
import { Link } from "pragmate-ui/link";
import { ThemeSwitcher } from "pragmate-ui/theme-switcher";

export /* bundle */ function Navbar() {
  return (
    <nav className="container__navbar">
      <h2 className="navbar__h2">
        <Link href="/">
          Pragmate <strong className="navbar__strong-hover">UI</strong>
        </Link>
      </h2>
      <ul className="nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">docs</Link>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
}
