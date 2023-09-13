export const implementation = `
import * as React from "react";
import { Menu } from "pragmate-ui/menu";

export /*bundle*/
function View(): JSX.Element {
    const menuItems = [
  {
    title: "Profile",
    icon: "user",
  },
  {
    title: "Notifications",
    link: "/notifications",
    icon: "bell",
  },
  {
    title: "Settings",
    link: "/settings",
    icon: "settings",
  },
];
  return (
    <div>
        <Menu items={menuItems} title="Title"/> 
    </div>
  );
}

`;
