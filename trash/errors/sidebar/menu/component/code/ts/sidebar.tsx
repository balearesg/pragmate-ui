import React, { PropsWithChildren, MutableRefObject } from "react";
import { IconButton } from "pragmate-ui/icons";
import { ScrollContainer } from "pragmate-ui/perfect-scrollbar";
interface Props extends Partial<HTMLElement> {
  logo?: JSX.Element;
  onChange?: (isOpen: boolean) => void;
}

export /*bundle*/ function DropdownSidebar(
  props: PropsWithChildren<Props>
): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { onChange, children, logo } = props;
  const sidebarRef: MutableRefObject<HTMLElement> =
    React.useRef<HTMLElement>(null);
  const cls: string = isOpen ? "sidebar open" : "sidebar closed";
  const title: string = isOpen ? "close" : "open";

  function toggleIsOpen(): void {
    setIsOpen(!isOpen);
    if (onChange) onChange(isOpen);
  }

  return (
    <aside ref={sidebarRef} className={cls}>
      <div className="sidebar__header">
        {logo && <div className="logo">{logo}</div>}
        <IconButton
          title={title}
          onClick={toggleIsOpen}
          icon="chevronRight"
          className="toggle__btn"
        />
      </div>
      <ScrollContainer className="sidebar__nav">
        <ul className="sidebar__list">{children}</ul>
      </ScrollContainer>
    </aside>
  );
}
