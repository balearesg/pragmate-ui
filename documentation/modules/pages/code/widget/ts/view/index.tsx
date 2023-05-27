import * as React from "react";
import { Empty } from "@bgroup/ui/empty";
import { Code } from "@bgroup/ui/code";
import { implementation } from "./implementation";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1>Code</h1>
      <p>
        El componente Code se utiliza para mostrar porciones de codigo de
        muestra que el usuario puede copiar, util si en nuestra web o aplicacion
        quisieramos hacer muestra de ejemplos de codigo o dispensar
        explicaciones o ayudas. Un claro ejemplo son las muestras de codigo que
        puedes ver en toda esta docs.
      </p>
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { Code } from '@bgroup/ui/code';`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
        </div>

        <div className="component-result">
          <h3>Result:</h3>
          <Code>{'console.log("hello code :)");'}</Code>
        </div>
      </div>
    </div>
  );
}
