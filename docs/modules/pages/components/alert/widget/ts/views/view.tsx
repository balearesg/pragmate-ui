import React from "react";
import {
  implementation,
  implementationError,
  implementationInfo,
  implementationWaring,
  implementationSuccess,
} from "./implementation";
import { Alert } from "pragmate-ui/alert";
import { cases } from "./cases";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View() {
  return (
    <div>
      <div className="view">
        <h1>Alert</h1>
        <p>
          El componente Alert muestra un mensaje de alerta en tu aplicacion. Muy
          util ya que los alerts se utilizan para mantener a los usuarios
          informados sobre cambios importantes o situaciones críticas en una
          aplicación web. Justo tenemos tres tipos de alert: Succes, Erorr y
          Warning
        </p>
        <div className="component-info">
          <h3>Import:</h3>
          <Code>{`import { Alert } from 'pragmate-ui/alert';`}</Code>
          <Code>{implementation}</Code>

          <h3>Description:</h3>

          <ul>
            <li>
              <strong>title:</strong> título de nuestro alert.
            </li>
            <li>
              <strong>message:</strong> mensaje que deseemos agregar a nuestro
              alert.
            </li>
            <li>
              <strong>mode:</strong> el tipo de alert que deseemos usar, hay
              tres tipos de alert que dispensamos: "success", "warning", "error"
              y "info".
            </li>
            <li>
              <strong>show:</strong> atributo al que pasaremos un booleano para
              indicar si queremos mostrar el alert.
            </li>
            <li>
              <strong>isClose:</strong> atributo al que pasaremos un booleano
              para indicar si queremos que nuestro alert tenga un botón para
              cerrar.
            </li>
          </ul>

          <main className="component-container component-container__alert">
            <div className="column">
              <h3>Result:</h3>
            </div>
            <div className="column">
              <h3>Implementation:</h3>
            </div>

            <div className="box">
              <h3>Case success alert</h3>
              <Alert {...cases.success} />
            </div>
            <Code>{implementationSuccess}</Code>

            <div className="box">
              <h3>Case error alert</h3>
              <Alert {...cases.error} />
            </div>
            <Code>{implementationError}</Code>

            <div className="box">
              <h3>Case warning alert</h3>
              <Alert {...cases.warning} />
            </div>

            <Code>{implementationWaring}</Code>

            <div className="box">
              <h3>Case info alert</h3>
              <Alert {...cases.info} />
            </div>
            <Code>{implementationInfo}</Code>
          </main>
        </div>
      </div>
    </div>
  );
}
