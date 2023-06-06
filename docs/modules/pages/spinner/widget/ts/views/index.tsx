import * as React from "react";
import { Spinner } from "pragmate-ui/spinner";
import { InlineCode, Code } from "pragmate-ui/code";

export /*bundle*/
function View() {
  const types = ["primary", "secondary", "tertiary"];
  const bgs = ["on-primary", "on-secondary"];

  return (
    <div className="view">
      <h1 className="view__h1">Spinner</h1>
      <p className="view__p">
        El componente <span className="view__span">Spinner</span> es un elemento
        de la interfaz de usuario que se muestra cuando se está cargando o
        realizando una acción que requiere tiempo, como la carga de datos o la
        ejecución de una operación en segundo plano. El componente spinner puede
        incluir animaciones, colores y estilos personalizados para adaptarse a
        la apariencia y el estilo de la aplicación. Funcionalidades Muestra una
        animación de carga mientras se realiza una acción en segundo plano.
        Personalización de estilos y configuraciones. Integración fácil con
        diferentes marcos de JavaScript, como Angular, Vue.js y React.
        Compatibilidad con diferentes navegadores y dispositivos.
      </p>
      <div>
        <h3>Import:</h3>
        <Code>{`import { Spinner } from 'pragmate-ui/spinner';`}</Code>
        <main className="component-container">
          <div className="column">
            <h3>Colors:</h3>
            <div className="inline__container">
              {types.map((type, index) => (
                <div key={index}>
                  <Spinner type={type} active />
                  <InlineCode>type={`"${type}"`}</InlineCode>
                </div>
              ))}
            </div>
            <div>
              <Code>{`<Spinner type="primary" active/>`}</Code>
            </div>
          </div>
          <div className="column">
            <h3>on Backgrounds:</h3>
            <div className="inline__container on-backgrounds">
              {bgs.map((type, index) => (
                <div key={index} className={type}>
                  <Spinner type={type} active />
                  <InlineCode>type={`"${type}"`}</InlineCode>
                </div>
              ))}
            </div>
            <div>
              <Code>{`<Spinner type="primary" active/>`}</Code>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
