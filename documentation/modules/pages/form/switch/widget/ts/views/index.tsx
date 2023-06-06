import * as React from "react";
import { CopyableImplementation } from "pragmate-ui/copyable-implementation";
import { Results } from "./results";
import { implementation } from "./implementation";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1 className="view__h1">Switch</h1>
      <p className="view__p">
        El componente <span className="view__span">Switch</span> Permite
        alternar entre dos estados, como encendido y apagado, activado y
        desactivado, etc
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { Switch } from 'pragmate-ui/form';`}</Code>
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
