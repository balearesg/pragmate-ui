import * as React from "react";
import { CopyableImplementation } from "pragmate-ui/copyable-implementation";
import { Results } from "./results";
import { implementation, implementationPhoto } from "./implementation";
import { ResultsUserPhoto } from "./results-user-photo";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view view-drap-and-droll">
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
          </div>
          <div className="flex-row">
            <Results />
            <div className="info">
              <h4>Component information:</h4>
              <p>
                - Recibe <strong>count</strong> para definir la cantidad máxima
                de archivos que se pueden cargar si desea definir pase sin
                límite a count <strong>Infinity</strong>
              </p>
              <p>
                - Recibe <strong>formats</strong> que es una matriz de cadenas
                con los formatos disponibles que se pueden cargar.
              </p>
              <p>
                - Recibe <strong>onUpload</strong> que es una función que recibe
                los archivos cargados.
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
                - Recibe <strong>textUserPhoto</strong> en caso de que quieras
                cambiar el texto en el componente.
              </p>
              <p>
                - Recibe <strong>onUpload</strong> que es una función que recibe
                los archivos cargados.
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
