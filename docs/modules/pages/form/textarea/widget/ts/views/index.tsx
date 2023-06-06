import * as React from "react";
import { CopyableImplementation } from "pragmate-ui/copyable-implementation";
import { Results } from "./results";
import { implementation } from "./implementation";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view view-textarea">
      <h1 className="view__h1">Textarea</h1>
      <p className="view__p">
        El componente <span className="view__span">Textarea</span> permite a los
        usuarios ingresar texto en un formato de varias líneas.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { Textarea } from 'pragmate-ui/form';`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
        </div>

        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
