import * as React from "react";
import { Header } from "@bgroup/ui/header";

import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import {
  implementation,
  implementationDisabled,
  implementationError,
  implementationIcon,
  implementationLoading,
  implementationPassword,
} from "./implementations";
import { Results } from "./results";
import { ResultInputError } from "./result-input-error";
import { ResultInputWithIcon } from "./result-input-with-icon";
import { ResultInputDisabled } from "./result-input-disabled";
import { ResultInputPassword } from "./result-input-password";
import { ResultInputLoading } from "./result-input-loading";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
export /*bundle*/
function View() {
  return (
    <div className="view">
      <div className="component-info">
        <h3>Import:</h3>
        <CopyableImplementation>{`import { Input } from '@bgroup/ui/form';`}</CopyableImplementation>
        <CopyableImplementation>{implementation}</CopyableImplementation>
        <main className="component-container">
          <div className="column">
            <h3>Result:</h3>
          </div>
          <div className="column">
            <h3>Implementation:</h3>
          </div>

          <div className="box">
            <h3>Case input error:</h3>
            <ResultInputError />
          </div>
          <div className="box-implementation">
            <div className="box__result">
              <CopyableImplementation>
                {implementationError}
              </CopyableImplementation>
            </div>
          </div>

          <div className="box">
            <h3>Case input with icon:</h3>
            <span>
              <ResultInputWithIcon />
            </span>
          </div>
          <CopyableImplementation>{implementationIcon}</CopyableImplementation>

          <div className="box">
            <h3>Case input disabled:</h3>
            <span>
              <ResultInputDisabled />
            </span>
          </div>
          <CopyableImplementation>
            {implementationDisabled}
          </CopyableImplementation>

          <div className="box">
            <h3>Case input password:</h3>
            <span>
              <ResultInputPassword />
            </span>
          </div>
          <CopyableImplementation>
            {implementationPassword}
          </CopyableImplementation>

          <div className="box">
            <h3>Case input loading:</h3>
            <span>
              <ResultInputLoading />
            </span>
          </div>
          <CopyableImplementation>
            {implementationLoading}
          </CopyableImplementation>
        </main>
      </div>
    </div>
  );
}
