import React from "react";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { Code } from "@bgroup/ui/code";

import {
  implementation,
  implementationError,
  implementationInfo,
  implementationWaring,
} from "./implementation";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
import { Alert } from "@bgroup/ui/alert";
import { cases } from "./cases";
import { Code } from "@bgroup/ui/code";

export /*bundle*/
function View() {
  return (
    <div>
      <div className="view">
        <div className="component-info">
          <h3>Import:</h3>
          <Code>{`import { Alert } from '@bgroup/ui/alert';`}</Code>
          <Code>{implementation}</Code>
          <main className="component-container">
            <div className="column">
              <h3>Result:</h3>
            </div>
            <div className="column">
              <h3>Implementation:</h3>
            </div>

            <div className="box">
              <h3>Case success alert</h3>
              <Alert {...cases.success} />
            </div>
            <Code>{implementationInfo}</Code>

            <div className="box">
              <h3>Case error alert</h3>
              <Alert {...cases.error} />
            </div>
            <Code>{implementationError}</Code>

            <div className="box">
              <h3>Case warning alert</h3>
              <Alert {...cases.warning} />
            </div>
            <Code>{implementationWaring}</Code>
          </main>
        </div>
      </div>
    </div>
  );
}
