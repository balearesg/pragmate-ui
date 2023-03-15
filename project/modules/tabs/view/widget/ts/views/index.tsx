import * as React from "react";
import { Header } from "@bgroup/ui/header";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { implementation } from "./implementation";
import { Results } from "./results";
export /*bundle*/
function View() {
  return (
    <div className="view">
      <Header componentName="Tabs" />
      <div className="component-info">
        <h3>Import:</h3>
        <CopyableImplementation>{`import { TabsContent, BeyondTabs, Tabs } from "@bgroup/ui/tabs";`}</CopyableImplementation>
   
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <CopyableImplementation>{implementation}</CopyableImplementation>
          <div className="component-detail">
          <h4>Additional Information:</h4>
          <div>
            <p>
              If you pass the<code>data-path</code> property over the tabs each
              tab will do a<code>routing.replaceState</code> on the value passed
              to data-path. tab will do a routing.replaceState on the value
              passed to <code>data-path</code>
            </p>
          </div>
        </div>
        </div>
        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
