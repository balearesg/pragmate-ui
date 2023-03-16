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
        <Header componentName="Input" />
        <div className="component-info">
          <h3>Import:</h3>
          <CopyableImplementation>{`import { BeyondInput } from '@bgroup/ui/form';`}</CopyableImplementation>
        </div>
        <div className="component-implementation">
          <div className="component-info">
            <h3>Implementation:</h3>
            <CopyableImplementation>{implementation}</CopyableImplementation>
          </div>
          <div className="component-result">
            <h3>Result:</h3>
            <Results />
            <h3>Case input error:</h3>
            <ImplementationResult code={implementationError}>
              <ResultInputError />
            </ImplementationResult>
            <h3>Case input with icon:</h3>
            <ImplementationResult code={implementationIcon}>
              <ResultInputWithIcon />
            </ImplementationResult>
            <h3>Case input disabled:</h3>
            <ImplementationResult code={implementationDisabled}>
              <ResultInputDisabled />
            </ImplementationResult>
            <h3>Case input password:</h3>
            <ImplementationResult code={implementationPassword}>
              <ResultInputPassword />
            </ImplementationResult>
            <h3>Case input loading:</h3>
            <ImplementationResult code={implementationLoading}>
              <ResultInputLoading />
            </ImplementationResult>
          </div>
        </div>
      </div>
  
  );
}
