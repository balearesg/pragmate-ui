import * as React from "react";
import { Sidebar } from "../components/sidebar";
import { Toasts } from "pragmate-ui/toast";
import { Nav } from "@bgroup/simply-docs/nav";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "beyond-layout-children": any;
    }
  }
}

export function Layout() {
  return (
    <main>
      {/*  <Toasts
        position={{
          bottom: "2rem",
          right: "2rem",
        }}
      /> */}
      <Nav />
      <div className="main-content">
        <Sidebar />
        <beyond-layout-children />
      </div>
      <footer className="footer">bgroup/ui MIT </footer>
    </main>
  );
}
