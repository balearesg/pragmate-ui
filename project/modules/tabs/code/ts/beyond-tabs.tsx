import * as React from "react";
import { TabsContextProvider } from "./context";

export /*bundle*/ function TabsContainer(props): JSX.Element {
  return <TabsContextProvider {...props}>{props.children}</TabsContextProvider>;
}
