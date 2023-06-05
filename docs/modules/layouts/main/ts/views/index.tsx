import * as React from "react";
import { Sidebar } from "../components/sidebar";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "beyond-layout-children": any;
    }
  }
}

export function Layout() {
  return (
    <body>
      <main>
        <div className="main-content">
          <Sidebar />
          <beyond-layout-children />
        </div>
      </main>
      <footer className="footer">bgroup/ui MIT </footer>
    </body>
  );
}
