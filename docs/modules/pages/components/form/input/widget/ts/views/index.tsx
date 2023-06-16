import * as React from "react";

import { CopyableImplementation } from "pragmate-ui/copyable-implementation";
import {
  implementation,
  implementationDisabled,
  implementationError,
  implementationIcon,
  implementationLoading,
  implementationPassword,
} from "./implementations";
import { Results } from "./results";
import { ResultInputError } from "./result-input-error";
import { ResultInputWithIcon } from "./result-input-with-icon";
import { ResultInputDisabled } from "./result-input-disabled";
import { ResultInputPassword } from "./result-input-password";
import { ResultInputLoading } from "./result-input-loading";
import { Code } from "pragmate-ui/code";

import { ImplementationResult } from "pragmate-ui/implementation-result";
export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1 className="view__h1">Input</h1>
      <p className="view__p">
        El componente <span className="view__span">Input</span> Nos permite
        agregar elementos input a nuestra aplicacion con la especialidad de
        poder agregar si deseamos o necesitamos como atributos un label
        definido,icono, un disable, contraseña con icono de ocultar y un
        spinner.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { Input } from 'pragmate-ui/form';`}</Code>
        <Code>{implementation}</Code>
        <main className="component-container component-container__input">
          <div className="column">
            <h3>Result:</h3>
          </div>
          <div className="column">
            <h3>Implementation:</h3>
          </div>

          <div className="box">
            <h3>Case input error:</h3>
            <ResultInputError />
          </div>
          <div className="box-implementation">
            <div className="box__result">
              <Code>{implementationError}</Code>
            </div>
          </div>

          <div className="box">
            <h3>Case input with icon:</h3>
            <span>
              <ResultInputWithIcon />
            </span>
          </div>
          <Code>{implementationIcon}</Code>

          <div className="box">
            <h3>Case input disabled:</h3>
            <span>
              <ResultInputDisabled />
            </span>
          </div>
          <Code>{implementationDisabled}</Code>

          <div className="box">
            <h3>Case input password:</h3>
            <span>
              <ResultInputPassword />
            </span>
          </div>
          <Code>{implementationPassword}</Code>

          <div className="box">
            <h3>Case input loading:</h3>
            <span>
              <ResultInputLoading />
            </span>
          </div>
          <Code>{implementationLoading}</Code>
        </main>
      </div>
    </div>
  );
}
