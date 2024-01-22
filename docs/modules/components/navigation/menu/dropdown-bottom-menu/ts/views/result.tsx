import React from "react";
import { DropdownBottomMenu } from "pragmate-ui/dropdown-bottom-menu";
import { IconButton } from "pragmate-ui/icons";
export function Result(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <IconButton icon="menu" onClick={toggleMenu} />
      <DropdownBottomMenu handleClick={toggleMenu} show={isOpen}>
        <div>Content</div>
      </DropdownBottomMenu>
    </div>
  );
}
