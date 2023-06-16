import * as React from "react";
import { Result } from "./results";
import { implementation } from "./implementation";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View({ store }) {
  const [reset, setReset] = React.useState<number>(0);
  useBinder(
    [store],
    () => {
      setReset(store.count);
    },
    "hide"
  );

  return (
    <div className="view beyond-image-view">
      <h1 className="view__h1">Verification Code</h1>
      <p className="view__p">
        El componente <span className="view__span">Verification Code</span> es
        un elemento de la interfaz de usuario que permite a los usuarios
        ingresar códigos de verificación para confirmar su identidad o
        autenticar sus acciones en una aplicación. Los códigos de verificación
        pueden ser númericos, alfanuméricos o incluso imágenes en algunos casos.
        Funcionalidades Muestra un campo de entrada para que los usuarios
        ingresen el código de verificación.
      </p>
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { InputCode } from "pragmate-ui/code-verification";`}</Code>
        <main className="component-container">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
          <div className="component-result">
            <h3>Result:</h3>
            <Result reset={reset} />
          </div>
        </main>
      </div>
    </div>
  );
}
