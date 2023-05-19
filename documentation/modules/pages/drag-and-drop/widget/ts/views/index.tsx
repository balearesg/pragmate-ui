import * as React from "react";
import { Header } from "@bgroup/ui/header";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";

import { Results } from "./results";
import { implementation, implementationPhoto } from "./implementation";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
import { ResultsUserPhoto } from "./results-user-photo";
export /*bundle*/
  function View() {
  return (
  
      <div className="view">
        <Header componentName="DragAndDrop" />
        <div className="component-info">
          <h3>Import: </h3>
          <CopyableImplementation>{`import { DragAndDrop } from '@bgroup/ui/drag-and-drop';`}</CopyableImplementation>
        </div>
        <div className="component-implementation">
          <div className="component-result">
            <div>
              <h3>Case upload file:</h3>
              <ImplementationResult code={implementation}>
                <Results />
              </ImplementationResult>
            </div>
            <div className="component-detail">
              <h4>Component information:</h4>
              <div>
                <p>
                  - Receives <code>count</code> to define the maximum amount of files that
                  can be loaded if you want to define no limit pass to count
                  <code>Infinity</code> <br />
                  - Receives <code>formats</code> which is an array of strings with
                  the available formats that can be loaded. <br />
                  - Receives <code>onUpload</code> which is a function that receives the uploaded files.
                </p>
              </div>
            </div>
          </div>
          <div className="component-result">
            <div className="w-100">
              <h3>Case upload file:</h3>
              <ImplementationResult code={implementationPhoto}>
                <ResultsUserPhoto />
              </ImplementationResult>
            </div>
            <div className="component-detail">
              <h4>Component information:</h4>
              <div>
                <p>
                  - Receives <code>textUserPhoto</code> in case you want to change the text on the component <br />
                  - Receives <code>onUpload</code> which is a function that receives the uploaded files. <br />
                  - By default only one file and image format is supported.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
   
  );
}
