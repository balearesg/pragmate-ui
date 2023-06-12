import * as React from "react";
import { SidebarItem } from "./sidebar-item";
import { Icon } from "pragmate-ui/icons";

export function SidebarDropdown({ component }) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
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
    <li className="sidebar-item">
      <a className="sidebar-item__icon" onClick={toggleDropdown}>
        {component.name}
        <Icon icon={icon} name={component.name} className={iconDirection} />
      </a>
      {isDropdownOpen && <ul className="sub-list">{subComponentsElements}</ul>}
    </li>
  );
}
