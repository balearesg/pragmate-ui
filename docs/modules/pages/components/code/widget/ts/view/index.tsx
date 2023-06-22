import * as React from "react";
import { Code } from "pragmate-ui/code";
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
        <Code>{`import { Code } from 'pragmate-ui/code';`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>

          <p>
            Puede implementar su codigo ya sea agregando la expresion adentro de
            llaves o si desea agregarla como cualquier texto que quiere tener
            ahi mismo puede hacerlo agregando las comillas inversas adentro de
            las llaves
          </p>

          <h5>agregando una expresion:</h5>
          <Code>{implementation}</Code>

          <h5>agregando el texto:</h5>
          <Code>{`<Code>{'var bar = 1;'}</Code>`}</Code>
        </div>

        <div className="component-result">
          <h3>Result:</h3>
          <Code>{`var bar = 1;`}</Code>
        </div>
      </div>
    </div>
  );
}
