import * as React from "react";
import { components } from "../bg-components";
import { SidebarDropdown } from "./sidebar-dropdown";
import { SidebarItem } from "./sidebar-item";
import { routing } from "@beyond-js/kernel/routing";
import { BeyondScrollContainer } from "@bgroup/ui/perfect-scrollbar";
interface IComponent {
  name: string;
  path: string;
  subComponents?: Array<{ name: string; path: string }>;
}

export function Sidebar() {
  const componentsElements = components.map((component: IComponent) => {
    if (component?.subComponents.length > 0) {
      return <SidebarDropdown key={component.path} component={component} />;
    }

    return <SidebarItem key={component.path} component={component} />;
  });

  function goHome(event) {
    event.preventDefault();
    routing.pushState("/");
  }

  return (
    <BeyondScrollContainer
      className="aside"
      data-perfect-scrollbar=""
      data-suppress-scroll-x="true"
    >
      <aside>
        <h1 className="logo">
          <a onClick={goHome} href="/">
            Beyond <span>UI</span>
          </a>
        </h1>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">{componentsElements}</ul>
          </nav>
        </div>
      </aside>

      <div className="ps__rail-x">
        <div className="ps__thumb-x" tabIndex={0} />
      </div>
      <div className="ps__rail-y">
        <div className=" ps__thumb-y" tabIndex={0} />
      </div>
    </BeyondScrollContainer>
  );
}
