import React from "react";
import { implementation } from "./implementation";

import { cases } from "./cases";
import { Code } from "pragmate-ui/code";
import { Example } from "./example";

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
          <div>
            <Example />
          </div>
        </div>
      </div>
    </div>
  );
}
