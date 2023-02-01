import  React from "react";
import { Header } from "@bgroup/ui/header";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import {
    implementation,
    implementationError,
    implementationInfo,
    implementationWaring,
} from "./implementation";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
import { BeyondAlert } from '@bgroup/ui/alert';
import { cases } from "./cases";
export /*bundle*/
    function View() {
 
    return (
        <div>
            <div className="view">
                <Header componentName="Alert" />
                <div className="component-info">
                    <h3>Import:</h3>
                    <CopyableImplementation>{`import { BeyondAlert } from '@bgroup/ui/alert';`}</CopyableImplementation>
                </div>
                <div className="component-implementation">
                    <div className="component-info">
                        <h3>Implementation:</h3>
                        <CopyableImplementation>{implementation}</CopyableImplementation>
                    </div>
                    <div className="component-result">
                        <h3>Result:</h3>
                        <BeyondAlert {...cases.success} />
                        <h3>Case success alert</h3>
                        <ImplementationResult code={implementationError}>
                            <BeyondAlert {...cases.error} />
                        </ImplementationResult>
                        <h3>Case error alert</h3>
                        <ImplementationResult code={implementationWaring}>
                            <BeyondAlert {...cases.warning} />
                        </ImplementationResult>
                        <h3>Case warning alert</h3>
                        <ImplementationResult code={implementationInfo}>
                            <BeyondAlert {...cases.info} />
                        </ImplementationResult>
                    </div>
                </div>
            </div>
        </div>
    );
}
