import * as React from "react";
import { Sidebar } from "../components/sidebar";
import { Link } from "pragmate-ui/link";
import { Navbar } from "docs/navbar";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "beyond-layout-children": any;
    }
  }
}

export function Layout() {
  return (
    <div className="layout__container">
      <Navbar />
      <aside className="container__aside">
        <div className="block__content-none"></div>
        <h3 className="aside__h3-title">
          <Link href="/">
            Pragmate <strong className="h3__strong-hover">Components:</strong>
          </Link>
        </h3>
        <Sidebar />
      </aside>
      <beyond-layout-children />
    </div>
  );
}
