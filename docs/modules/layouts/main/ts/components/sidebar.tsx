import * as React from "react";
import { menuItems } from "../bg-components";
import { gettingStartedItems } from "../bg.getting-started";
import { SidebarDropdown } from "./sidebar-dropdown";
import { SidebarItem } from "./sidebar-item";
import { ScrollContainer } from "pragmate-ui/perfect-scrollbar";
import { Icon } from "pragmate-ui/icons";

interface IComponent {
  name: string;
  path: string;
  children?: Array<{ name: string; path: string }>;
}

export function Sidebar() {
  const sortedMenuItems = menuItems.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  let tabIndex = 1;

  const gettingElements = gettingStartedItems.map((component: IComponent) => {
    if (component?.children.length > 0) {
      return <SidebarDropdown key={component.path} component={component} />;
    }
    return (
      <SidebarItem
        key={component.path}
        tabIndex={tabIndex++}
        component={component}
      />
    );
  });

  const componentsElements = sortedMenuItems.map((component: IComponent) => {
    if (component?.children.length > 0) {
      return <SidebarDropdown key={component.path} component={component} />;
    }
    return (
      <SidebarItem
        key={component.path}
        tabIndex={tabIndex++}
        component={component}
      />
    );
  });

  return (
    <ScrollContainer
      className="aside-scrollbar"
      data-perfect-scrollbar=""
      data-suppress-scroll-x="true"
    >
      <aside className="doc__nav">
        <div className="">
          <nav className="aside__nav" role="navigation">
            <ul className="aside__ul">
              <li className="aside__li">
                <h3 className="aside__h3-title">
                  <Icon icon="setting" /> Getting Started:
                </h3>
              </li>
              {gettingElements}
            </ul>
            <ul className="aside__ul">
              <li className="aside__li">
                <h3 className="aside__h3-title">
                  {" "}
                  <Icon icon="categories" /> Components:
                </h3>
              </li>
              {componentsElements}
            </ul>
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
