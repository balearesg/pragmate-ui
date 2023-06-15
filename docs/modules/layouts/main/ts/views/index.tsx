import * as React from "react";
import { Sidebar } from "../components/sidebar";
import { Link } from "pragmate-ui/link";
import { Navbar } from "docs/navbar";
import { Footer } from "docs/footer";

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
        <h3 className="aside__h3-title">
          <Link href="/">
            Components<strong className="h3__strong-hover"> :</strong>
          </Link>
        </h3>
        <Sidebar />
      </aside>
      <beyond-layout-children />
      <Footer />
    </div>
  );
}
