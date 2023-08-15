import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";

interface Props {
  component: { path: string; name: string };
  tabIndex: number;
}

export function SidebarItem({ component, tabIndex }: Props) {
  const [currentRouting, setCurrentRouting] = React.useState(
    routing.uri.pathname
  );

  const location = `/docs/${component.path}`;

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
        {component.name}
      </a>
    </li>
  );
}
