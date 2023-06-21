import * as React from "react";
import { CopyableImplementation } from "pragmate-ui/copyable-implementation";
import { Results } from "./results";
import { implementation, implementationPhoto } from "./implementation";
import { ImplementationResult } from "pragmate-ui/implementation-result";
import { ResultsUserPhoto } from "./results-user-photo";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1 className="view__h1">Drag and drop</h1>
      <p className="view__p">
        El componente <span className="view__span">Drag and drop</span>{" "}
        implementa la logica para poder seleccionar elementos (arreglarlos) con
        el mouse, arrastrar esos elementos a un elemento droppable y soltarlos
        al soltar el botón del mouse. Util para poder guardar archivos, e
        imagnes. Tenemos dos tipos de componentes con este mecanismo.
      </p>
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { DragAndDrop } from 'pragmate-ui/drag-and-drop';`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-result">
          <div>
            <h3>Case upload file:</h3>
            <Code>{implementation}</Code>
            <Results />
          </div>
          <div className="component-detail">
            <h4>Component information:</h4>
            <div>
              <p>
                - Recibe <code>count</code> para definir la cantidad máxima de
                archivos que se pueden cargar si desea definir pase sin límite a
                count <code>Infinity</code>
              </p>
              <p>
                - Recibe <code>formats</code> que es una matriz de cadenas con
                los formatos disponibles que se pueden cargar.
              </p>
              <p>
                - Recibe <code>onUpload</code> que es una función que recibe los
                archivos cargados.
              </p>
            </div>
          </div>
        </div>
        <div className="component-result">
          <div className="w-100">
            <h3>Case upload file:</h3>
            <Code>{implementationPhoto}</Code>
            <ResultsUserPhoto />
          </div>
          <div className="component-detail">
            <h4>Component information:</h4>
            <div>
              <p>
                - Recibe <code>textUserPhoto</code> en caso de que quieras
                cambiar el texto en el componente.
              </p>
              <p>
                - Recibe <code>onUpload</code> que es una función que recibe los
                archivos cargados.
              </p>
              <p>
                - De forma predeterminada, solo se admite un formato de archivo
                e imagen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
