import * as React from "react";
import { Code } from "@bgroup/ui/code";
import { implementation } from "./implementation";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1 className="view__h1">Form</h1>
      <p className="view__p">
        El componente <span className="view__span">Form</span> permite a los
        usuarios poder crear un elemento form como cualquier otro pero con la
        particularidad de que en su funcion onSubmit no sea necesario agregar la
        funcion Event.currentTargert().
      </p>
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { Form } from '@bgroup/ui/form';`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation:</h3>
          <Code>{implementation}</Code>
        </div>
      </div>
    </div>
  );
}
