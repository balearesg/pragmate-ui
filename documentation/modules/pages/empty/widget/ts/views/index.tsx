import * as React from "react";
import { Empty } from "@bgroup/ui/empty";
import { Code } from "@bgroup/ui/code";
import { implementation } from "./implementation";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { Empty } from '@bgroup/ui/empty';`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
        </div>

        <div className="component-result">
          <h3>Result:</h3>
          <Empty icon="info" text="No records to display" />
        </div>
      </div>
    </div>
  );
}
