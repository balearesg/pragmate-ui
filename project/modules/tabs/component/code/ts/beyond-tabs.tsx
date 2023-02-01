import * as React from 'react';
import { TabsContextProvider } from "./context";

export /*bundle*/ function BeyondTabs(props) : JSX.Element {
  return (
    <TabsContextProvider {...props}>{props.children}</TabsContextProvider>
  );
}
