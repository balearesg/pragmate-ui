import * as React from "react";
import { Results } from "./results";
import { implementation } from "./implementation";
import { Code } from "@bgroup/ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view beyond-image-view">
      <h1 className="view__h1">Perfect Scrollbar</h1>
      <p className="view__p">
        El componente <span className="view__span">Perfect Scrollbar</span> es
        un wrapper personalizado. El componente proporciona una solución
        elegante y fácil de usar para agregar un scrollbar perfecto a los
        elementos de la interfaz de usuario. Personalización de estilos y
        configuraciones. Soporte para diferentes navegadores y dispositivos.
        Funciona con elementos de alto contenido y diferentes alturas de
        contenido.
      </p>
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { ScrollContainer } from "@bgroup/ui/perfect-scrollbar";`}</Code>
        <main className="component-container">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
          <div className="component-result">
            <h3>Result:</h3>
            <Results />
          </div>
        </main>
      </div>
    </div>
  );
}
