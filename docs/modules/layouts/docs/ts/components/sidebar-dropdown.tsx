import * as React from "react";
import { SidebarItem } from "./sidebar-item";
import { Icon } from "pragmate-ui/icons";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";
import { routing } from "@beyond-js/kernel/routing";

export function SidebarDropdown({ component }) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const [currentRouting, setCurrentRouting] = React.useState(
    routing.uri.pathname
  );

  const location = `/components/${component.path}`;
  console.log(component.path, "sidebar-dropdowm");

  const isChecked =
    location === routing.uri.pathname
      ? "sidebar__item--checked"
      : "sidebar__item";

  useBinder([routing], () => setCurrentRouting(routing.uri.pathname));

  const subComponentsElements = component.children.map(
    (subComponent: { path: string; name: string }) => (
      <SidebarItem key={subComponent.path} component={subComponent} />
    )
  );
  const iconDirection = isDropdownOpen ? "down" : "right";

  function toggleDropdown(event) {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  }

  const icon = isDropdownOpen ? "expandMore" : "chevronRight";
  return (
    <li className={isChecked}>
      <a className="sidebar-item__icon" onClick={toggleDropdown}>
        {component.name}
        <Icon icon={icon} name={component.name} className={iconDirection} />
      </a>
      {isDropdownOpen && <ul className="sub-list">{subComponentsElements}</ul>}
    </li>
  );
}
