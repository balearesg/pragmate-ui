import * as React from "react";
import { Results } from "./results";
import { implementation } from "./implementation";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view beyond-image-view">
      <h1 className="view__h1">Image</h1>
      <p className="view__p">
        El componente <span className="view__span">Image</span> permite añadir
        una url y alt para agregar una imagen y ademas detecta cuando la imagen
        se está cargando o cuando la imagen no se pudo cargar, en ambos casos se
        establece una clase html diferente, para el caso de carga más allá de la
        precarga de la imagen del elemento y para el caso de error más allá del
        error de la imagen del elemento.
      </p>
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { Image } from 'pragmate-ui/image';`}</Code>
        <main className="component-container">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
          <div className="component-detail"></div>
        </main>
        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
