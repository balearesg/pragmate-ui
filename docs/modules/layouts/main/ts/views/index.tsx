import * as React from "react";
import { Sidebar } from "../components/sidebar";
import { Link } from "simply-ui/link";

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
      <aside className="container__aside">
        <h3 className="aside__h3-title">
          <Link href="/">
            Simpli <strong className="h3__strong-hover">UI</strong>
          </Link>
        </h3>
        <Sidebar />
      </aside>
      <beyond-layout-children />
    </div>
  );
}
