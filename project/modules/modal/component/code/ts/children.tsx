import * as React from "react";
import {
  createContext,
  isValidElement,
  useContext,
  Context,
  cloneElement,
  ReactNode,
  SyntheticEvent,
} from "react";
import { BeyondIconButton } from "@bgroup/ui/icons";
export const BeyondModalContext: Context<any> = createContext({});
export const useBeyondModalContext = () => useContext(BeyondModalContext);

type props = {
  children: ReactNode;
  close?: (e: SyntheticEvent<HTMLElement, Event>) => void;
  dismiss?: boolean;
};
export const Children = ({ children, close, dismiss }: props): JSX.Element => {
  const output = [];
  if (dismiss !== false) {
    output.push(
      <BeyondIconButton
        className="close-icon"
        onClick={close}
        data-dismiss="modal"
        aria-label="Close"
        key="dismiss-button"
        icon="close"
      />
    );
  }
  const childrenWithProps = React.Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (isValidElement(child)) {
      const specs = {};
      //TODO: check a official way to check the children type
      return cloneElement(child, specs);
    }
    return child;
  });
  output.push(childrenWithProps);
  return (
    <BeyondModalContext.Provider
      value={{
        close,
        dismiss,
      }}
    >
      {output}
    </BeyondModalContext.Provider>
  );
};
