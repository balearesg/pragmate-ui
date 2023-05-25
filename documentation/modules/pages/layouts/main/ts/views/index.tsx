import * as React from "react";
import { Sidebar } from "../components/sidebar";
import { Toasts } from "@bgroup/ui/toast";
import { SliderBarNav } from "./slide-bar";
import { Nav } from "@bgroup/doc-ui/nav";

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
    </main>
  );
}
