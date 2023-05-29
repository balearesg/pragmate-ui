import * as React from "react";
import { SidebarItem } from "./sidebar-item";
import { Icon } from "@bgroup/ui/icons";

export function SidebarDropdown({ component }) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [iconToggle, setIconTogle] = React.useState(false);
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

  return (
    <li className="sidebar-item">
      <a className="sidebar-item__icon" onClick={toggleDropdown}>
        {component.name}
        <Icon icon="arrowDropDown" className={iconDirection} />
      </a>
      {isDropdownOpen && <ul className="sub-list">{subComponentsElements}</ul>}
    </li>
  );
}
