import React from "react";
import { CopyableImplementation } from "pragmate-ui/copyable-implementation";
import { Code } from "pragmate-ui/code";

import {
  implementation,
  implementationError,
  implementationInfo,
  implementationWaring,
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
            <Code>{implementationInfo}</Code>

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
          </main>
        </div>
      </div>
    </div>
  );
}
