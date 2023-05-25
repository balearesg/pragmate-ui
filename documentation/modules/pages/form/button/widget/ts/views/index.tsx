import * as React from "react";
import { Header } from "@bgroup/ui/header";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";

import { Results } from "./results";
import {
  implementation,
  implementationBorder,
  implementationCancel,
  implementationIcon,
  implementationSecondary,
  implementationSpinner,
} from "./implementation";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
import { ResultsSpinner } from "./result-sipnner";
import { ResultIcon } from "./result-icon";
import { ResultsSecondary } from "./button-secondary";
import { ResultsBorder } from "./button-border";
import { ResultsCancel } from "./button-cancel";
export /*bundle*/
function View() {
  return (
    <div className="view">
      {/* <Header componentName="Button" /> */}
      <div className="component-info import">
        <h3>Import: </h3>
        <CopyableImplementation>{`import { Button } from "@bgroup/ui/form";`}</CopyableImplementation>
        <CopyableImplementation>{implementation}</CopyableImplementation>
        <main className="component-implementation">
          <div className="column">
            <h3>result:</h3>
          </div>
          <div className="column">
            <h3>Implementation:</h3>
          </div>

          <div className="box">
            <h3>Case button secondary:</h3>
            <span>
              <ResultsSecondary />
            </span>
          </div>

          <div className="box-implementation">
            <CopyableImplementation>
              {implementationSecondary}
            </CopyableImplementation>
          </div>

          <div className="box">
            <h3>Case button border:</h3>
            <span>
              <ResultsBorder />
            </span>
          </div>

          <CopyableImplementation>
            {implementationBorder}
          </CopyableImplementation>

          <div className="box">
            <h3>Case button cancel:</h3>
            <span>
              <ResultsCancel />
            </span>
          </div>

          <CopyableImplementation>
            {implementationCancel}
          </CopyableImplementation>

          <div className="box">
            <h3>Case button loading:</h3>
            <span>
              <ResultsSpinner />
            </span>
          </div>

          <CopyableImplementation>
            {implementationSpinner}
          </CopyableImplementation>

          <div className="box">
            <h3>Case button with icon:</h3>
            <span>
              <ResultIcon />
            </span>
          </div>
          <CopyableImplementation>{implementationIcon}</CopyableImplementation>
        </main>
      </div>
    </div>
  );
}
