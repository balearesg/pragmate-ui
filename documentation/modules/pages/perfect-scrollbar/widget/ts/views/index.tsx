import * as React from "react";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { Results } from "./results";
import { implementation } from "./implementation";
import { Code } from "@bgroup/ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view beyond-image-view">
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { ScrollContainer } from "@bgroup/ui/perfect-scrollbar";`}</Code>
        <main className="component-container">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
          <div className="component-result">
            <h3>Result:</h3>
            <Results />
          </div>
        </main>
      </div>
    </div>
  );
}
