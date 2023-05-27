import * as React from "react";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { component, template } from "./implementations";
import { Results } from "./results";
import { Code } from "@bgroup/ui/code";

export /*bundle*/
function Widget() {
  return (
    <div className="view input-controller-view">
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import {InputController} from '@bgroup/ui/input-controller';`}</Code>
      </div>
      <div className="component-info">
        <h3>Implementation</h3>
        <Code>{component}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>template.json</h3>
          <Code>{template}</Code>
        </div>
        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
