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
          <p>
            El componente <code>Alert</code> recibe 5 atributos que tenemos que
            pasar:
          </p>

          <p>
            <code>title:</code> titulo de nuestro alert.
          </p>
          <p>
            <code>message:</code> mensajae que deseemos agregar a nuestro alert.
          </p>
          <p>
            <code>mode:</code> el tipo de alert que deseemos usar, hay tres
            tipos de alert que dispensamos: "success", "warning", "error" y
            "info".
          </p>
          <p>
            <code>show:</code> atributo al que pasaremos un boleano para indicar
            si queremos motrar el alert.
          </p>
          <p>
            <code>isClose:</code> atributo al que pasaremos un boleano para
            indicar si queremos que nuestro alert tenga un boton para cerrar.
          </p>

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
