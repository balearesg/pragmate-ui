import * as React from "react";
import { Empty } from "pragmate-ui/empty";
import { Code } from "pragmate-ui/code";
import { implementation } from "./implementation";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1 className="view__h1">Emty</h1>
      <p className="view__p">
        El componente <span className="view__span">Emty</span> representar un
        mensaje o elemento visual que indica a los usuarios que no se
        encontraron resultados relevantes o útiles.
      </p>
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { Empty } from 'pragmate-ui/empty';`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
        </div>

        <div className="component-result">
          <h3>Result:</h3>
          <Empty icon="info" text="No records to display" />
        </div>
      </div>
    </div>
  );
}
