import * as React from "react";
import { Header } from "@bgroup/ui/header";
import { toast } from "@bgroup/ui/toast";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import {
  implementation,
  implementation2,
  implementationError,
  implementationInfo,
  implementationLoading,
  implementationSuccess,
  implementationWaring,
} from "./implementation";
import { BeyondButton } from "@bgroup/ui/form";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
export /*bundle*/
function View() {
  function toggleToast(
    event: React.SyntheticEvent<HTMLButtonElement, Event>
  ): void {
    const { dataset } = event.currentTarget;
    toast[dataset.type](dataset.message);
  }

  return (
    <div>
      <div className="view">
        <Header componentName="Toast" />
        <div className="component-info">
          <h3>Import:</h3>
          <CopyableImplementation>{`import { Toasts, toast } from '@bgroup/ui/toast';`}</CopyableImplementation>
        </div>
        <div className="component-implementation">
          <div className="component-info">
            <h3>Implementation:</h3>
            <CopyableImplementation>{implementation}</CopyableImplementation>
          </div>
          <div className="component-result">
            <h3>Result:</h3>
            <BeyondButton
              data-type="info"
              data-message="This is an example"
              className="btn btn-primary"
              onClick={toggleToast}
            >
              Show Toast
            </BeyondButton>
            <h3>Case success toast</h3>
            <ImplementationResult code={implementationSuccess}>
              <BeyondButton
                data-type="success"
                data-message="This is an example of success toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show success Toast
              </BeyondButton>
            </ImplementationResult>
            <h3>Case error toast</h3>
            <ImplementationResult code={implementationError}>
              <BeyondButton
                data-type="error"
                data-message="This is an example of error toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show error Toast
              </BeyondButton>
            </ImplementationResult>
            <h3>Case warning toast</h3>
            <ImplementationResult code={implementationWaring}>
              <BeyondButton
                data-type="warning"
                data-message="This is an example of warning toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show warning Toast
              </BeyondButton>
            </ImplementationResult>
            <h3>Case info toast</h3>
            <ImplementationResult code={implementationInfo}>
              <BeyondButton
                data-type="info"
                data-message="This is an example of info toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show info Toast
              </BeyondButton>
            </ImplementationResult>
            <ImplementationResult code={implementationLoading}>
              <BeyondButton
                data-type="loading"
                data-message="This is an example of loading toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show loading Toast
              </BeyondButton>
            </ImplementationResult>
          </div>
        </div>
      </div>
    </div>
  );
}
