import * as React from "react";
import { Results } from "./results";
import { implementation } from "./implementation";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1 className="view__h1">Modal alert</h1>
      <p className="view__p">
        El componente <span className="view__span">Modal alert</span> Permite
        mostrar en la pantalla del usuario un modal de alerta en el cual podemos
        agregar nuestro mensaje. Podemos cerrar este modal haciendo click afuera
        de el o en el boton de cerrar.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { ConfirmModal } from 'pragmate-ui/modal';`}</Code>
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
