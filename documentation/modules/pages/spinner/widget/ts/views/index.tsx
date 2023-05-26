import * as React from "react";
import { Header } from "@bgroup/ui/header";
import { Spinner } from "@bgroup/ui/spinner";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
import { InlineCode, Code } from "@bgroup/ui/code";
export /*bundle*/
function View() {
  const types = ["primary", "secondary", "tertiary"];
  const bgs = ["on-primary", "on-secondary"];

  return (
    <div className="view">
      {/* <Header componentName="Spinner" /> */}
      <div>
        <h3>Import:</h3>
        <CopyableImplementation>{`import { Spinner } from '@bgroup/ui/spinner';`}</CopyableImplementation>
        <main className="component-container">
          <div className="column">
            <h3>Colors:</h3>
            <div className="inline__container">
              {types.map((type, index) => (
                <div key={index}>
                  <Spinner type={type} active />
                  <InlineCode>type={`"${type}"`}</InlineCode>
                </div>
              ))}
            </div>
            <div>
              <Code>{`<Spinner type="primary" active/>`}</Code>
            </div>
          </div>
          <div className="column">
            <h3>on Backgrounds:</h3>
            <div className="inline__container on-backgrounds">
              {bgs.map((type, index) => (
                <div key={index} className={type}>
                  <Spinner type={type} active />
                  <InlineCode>type={`"${type}"`}</InlineCode>
                </div>
              ))}
            </div>
            <div>
              <Code>{`<Spinner type="primary" active/>`}</Code>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
