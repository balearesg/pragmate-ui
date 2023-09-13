import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";
import { IComponent, IItem } from "../interfaces/IComponent";

interface Props {
  component: IItem;
  tabIndex: number;
}

export function SidebarItem({ component, tabIndex }: Props) {
  const [currentRouting, setCurrentRouting] = React.useState(
    routing.uri.pathname
  );
  const [path, name] = component;
  const location = `/components/${name}`;

  const isChecked =
    location === routing.uri.pathname
      ? "sidebar__item--checked"
      : "sidebar__item";

  useBinder([routing], () => setCurrentRouting(routing.uri.pathname));

  function redirect(event) {
    event.preventDefault();
    routing.pushState(location);
  }

  return (
    <li className={isChecked}>
      <a tabIndex={tabIndex} onClick={redirect}>
        {name}
      </a>
    </li>
  );
}
