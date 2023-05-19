import React from "react";
import { Header } from "@bgroup/ui/header";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import {
  implementation,
  implementationError,
  implementationInfo,
  implementationWaring,
} from "./implementation";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
import { Alert } from "@bgroup/ui/alert";
import { cases } from "./cases";
export /*bundle*/
function View() {
  return (
    <div>
      <div className="view">
        <Header componentName="Alert" />
        <div className="component-info">
          <h3>Import:</h3>
          <CopyableImplementation>{`import { Alert } from '@bgroup/ui/alert';`}</CopyableImplementation>
          <CopyableImplementation>{implementation}</CopyableImplementation>
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
            <CopyableImplementation>
              {implementationInfo}
            </CopyableImplementation>

            <div className="box">
              <h3>Case error alert</h3>
              <Alert {...cases.error} />
            </div>
            <CopyableImplementation>
              {implementationError}
            </CopyableImplementation>

            <div className="box">
              <h3>Case warning alert</h3>
              <Alert {...cases.warning} />
            </div>
            <CopyableImplementation>
              {implementationWaring}
            </CopyableImplementation>
          </main>
        </div>
      </div>
    </div>
  );
}
