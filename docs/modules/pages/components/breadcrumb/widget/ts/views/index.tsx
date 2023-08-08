import * as React from "react";
import { implementation } from "./implementation";
import { implementationlistItems } from "./implementationListItems";
import { Results } from "./results";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function Page() {
  return (
    <div className="view">
      <h1>Breadcrumb</h1>
      <p>
        El componente <strong>Breadcrumb</strong> es un elemento de navegación
        que muestra la ruta actual del usuario en una jerarquía de páginas o
        secciones. Consiste en una serie de enlaces que indican la ubicación
        actual del usuario en el sitio web o la aplicación.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { BreadCrumb } from "pragmate-ui/breadcrumb"`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
        </div>

        <div className="list--items">
          <h3>List Items: </h3>
          <Code>{implementationlistItems}</Code>
          <p>
            El breadcrumb recibe <strong>items</strong> que es un arreglo de
            arreglos, en los subarreglos pasamos dos strings, el primero sera la
            ruta de navegacion, esta la pasaremos con Backticks o comillas
            invertidas. El segundo string sera normal y sera el label que se
            mostrara para la navegacion{" "}
          </p>
        </div>
        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
