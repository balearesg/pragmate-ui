import { BeyondIcon } from "@bgroup/ui/icon";
import React, { PropsWithChildren, useState } from "react";

interface Props {
  title?: string;
  className?: string;
}
export /*bundle*/ function Dropdown(
  props: PropsWithChildren<Props>
): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title, children, className } = props;
  const cls: string = isOpen ? "title open" : "title";
  function toggleOpen(): void {
    setIsOpen(!isOpen);
  }
  const clsDropdown: string = `essential__dropdown ${className ? className : ""}`;
  return (
    <section className={clsDropdown}>
      <div className={cls} onClick={toggleOpen}>
        <h6>{title}</h6>
        <BeyondIcon icon="right" className="icon" />
      </div>
      {isOpen && <div className="content">{children}</div>}
    </section>
  );
}

Dropdown.defaultProps = {
  title: "",
};
