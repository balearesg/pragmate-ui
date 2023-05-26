import * as React from "react";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { Results } from "./results";
import { implementation } from "./implementation";

export /*bundle*/
function View(): JSX.Element {
  return (
    <div className="view beyond-image-view">
      <div className="component-info">
        <h3>Import: </h3>
        <CopyableImplementation>{`import { DropdownSidebar } from '@bgroup/ui/menu';`}</CopyableImplementation>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <CopyableImplementation>{implementation}</CopyableImplementation>
        </div>

        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
