import * as React from "react";
import { Code } from "@bgroup/ui/copyable-implementation";
import { Results } from "./results";
import { implementation } from "./implementation";
import { Code } from "@bgroup/ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view beyond-image-view">
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { Image } from '@bgroup/ui/image';`}</Code>
        <main className="component-container">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
          <div className="component-detail">
            <h4>Preload:</h4>
            <div>
              <p>
                This component detects when the image is loading or when the
                image could not be loaded in both cases a different html class
                is set, for the loading case{" "}
                <code>beyond-element-image-preload</code>
                &nbsp; and for the error case
                <code>beyond-element-image-error</code>
              </p>
            </div>
          </div>
        </main>
        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
