import * as React from "react";
import { implementation } from "./implementation";
import { Results } from "./result";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1>ThemeSwitch</h1>
      <p>
        Este componente Theme Switch es un elemento de la interfaz de usuario
        que permite cambiar fácilmente entre temas claros y oscuros en una
        aplicación o sistema operativo. Este componente puede ser especialmente
        útil en aplicaciones web y de escritorio, así como en sistemas
        operativos como Windows 10, que admiten temas claros y oscuros.
        Funcionalidades Muestra un botón o interruptor para cambiar entre temas
        claros y oscuros.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { ThemeSwicth } from "pragmate-ui/theme-switcher"`}</Code>
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
