import * as React from "react";

export function SubItem() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toogleSubItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul onClick={toogleSubItem} className="item">
      form
      <li
        className="subItem"
        style={isOpen ? "display: block;" : "display:none"}
      >
        <a href="/components/checkbox">Checkbox</a>
      </li>
      <li
        className="subItem"
        style={isOpen ? "display: block;" : "display:none"}
      >
        <a href="/components/input">Input</a>
      </li>
      <li
        className="subItem"
        style={isOpen ? "display: block;" : "display:none"}
      >
        <a href="/components/switch">Switch</a>
      </li>
      <li
        className="subItem"
        style={isOpen ? "display: block;" : "display:none"}
      >
        <a href="/components/textarea">Textarea</a>
      </li>
      <li
        className="subItem"
        style={isOpen ? "display: block;" : "display:none"}
      >
        <a href="/components/button">Button</a>
      </li>
      <li
        className="subItem"
        style={isOpen ? "display: block;" : "display:none"}
      >
        <a href="/components/radio">Radio</a>
      </li>
      <li
        className="subItem"
        style={isOpen ? "display: block;" : "display:none"}
      >
        <a href="/components/form">Form</a>
      </li>
    </ul>
  );
}
