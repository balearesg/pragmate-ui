import * as React from "react";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { Results } from "./results";
import { implementation } from "./implementation";

export /*bundle*/
function View() {
  return (
    <div className="view beyond-image-view">
      <div className="component-info">
        <h3>Import: </h3>
        <CopyableImplementation>{`import { ScrollContainer } from "@bgroup/ui/perfect-scrollbar";`}</CopyableImplementation>
        <main className="component-container">
          <h3>Implementation: </h3>
          <CopyableImplementation>{implementation}</CopyableImplementation>
          <div className="component-result">
            <h3>Result:</h3>
            <Results />
          </div>
        </main>
      </div>
    </div>
  );
}
