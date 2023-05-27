import * as React from "react";
import { component, template } from "./implementations";
import { Results } from "./results";
import { Code } from "@bgroup/ui/code";

export /*bundle*/
function Widget() {
  return (
    <div className="view input-controller-view">
      <h1 className="view__h1">Input Controller</h1>
      <p className="view__p">
        El componente <span className="view__span">Input Controller</span> nos
        permite pasarle un template.json para poder manejar de forma colectiva
        creacion de elementos input, radio o switch. Abajo de estructura.
        permite añadir una url y alt para agregar una imagen y ademas detecta
        cuando la imagen se está cargando o cuando la imagen no se pudo cargar,
        en ambos casos se establece una clase html diferente, para el caso de
        carga más allá de la precarga de la imagen del elemento y para el caso
        de error más allá del error de la imagen del elemento.
      </p>
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import {InputController} from '@bgroup/ui/input-controller';`}</Code>
      </div>
      <div className="component-info">
        <h3>Implementation</h3>
        <Code>{component}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>template.json</h3>
          <Code>{template}</Code>
        </div>
        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
