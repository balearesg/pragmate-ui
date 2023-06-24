import * as React from "react";
import { Sidebar } from "../components/sidebar";
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
        <Sidebar />
      </aside>
      <beyond-layout-children class="main__container" />
      <Footer />
    </div>
  );
}
