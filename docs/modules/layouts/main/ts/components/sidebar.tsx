import * as React from "react";
import { menuItems } from "../bg-components";
import { SidebarDropdown } from "./sidebar-dropdown";
import { SidebarItem } from "./sidebar-item";
import { routing } from "@beyond-js/kernel/routing";
import { ScrollContainer } from "simply-ui/perfect-scrollbar";
interface IComponent {
  name: string;
  path: string;
  children?: Array<{ name: string; path: string }>;
}

export function Sidebar() {
  const componentsElements = menuItems.map((component: IComponent) => {
    if (component?.children.length > 0) {
      return <SidebarDropdown key={component.path} component={component} />;
    }
    return <SidebarItem key={component.path} component={component} />;
  });

  function goHome(event) {
    event.preventDefault();
    routing.pushState("/");
  }

  return (
    <ScrollContainer
      className="aside"
      data-perfect-scrollbar=""
      data-suppress-scroll-x="true"
    >
      <aside className="doc__nav">
        <div className="">
          <nav className="" role="navigation">
            <ul className="">{componentsElements}</ul>
          </nav>
        </div>
      </aside>

      <div className="ps__rail-x">
        <div className="ps__thumb-x" tabIndex={0} />
      </div>
      <div className="ps__rail-y">
        <div className=" ps__thumb-y" tabIndex={0} />
      </div>
    </ScrollContainer>
  );
}
