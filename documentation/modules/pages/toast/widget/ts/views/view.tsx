import * as React from "react";
import { toast } from "pragmate-ui/toast";
import {
  implementation,
  implementation2,
  implementationError,
  implementationInfo,
  implementationLoading,
  implementationSuccess,
  implementationWaring,
} from "./implementation";
import { Button } from "pragmate-ui/form";
import { Code } from "pragmate-ui/code";
import { ImplementationResult } from "pragmate-ui/implementation-result";
export /*bundle*/
function View() {
  function toggleToast(
    event: React.SyntheticEvent<HTMLButtonElement, Event>
  ): void {
    const { dataset } = event.currentTarget;
    toast[dataset.type](dataset.message);
  }

  return (
    <div>
      <div className="view">
        <h1 className="view__h1">Toats</h1>
        <p className="view__p">
          El componente <span className="view__span">Toats</span> es un elemento
          de la interfaz de usuario que permite mostrar mensajes temporales y
          relevantes a los usuarios en una aplicación. Los mensajes Toast pueden
          ser utilizados para proporcionar información adicional, alertas,
          confirmación de acciones realizadas o errores ocurridos en la
          aplicación. Muestra mensajes temporales y relevantes en la pantalla.
          Integración fácil con diferentes marcos de JavaScript, como Angular,
          Vue.js y React. Personalización de estilos y configuraciones. Soporte
          para mostrar mensajes en diferentes momentos y situaciones de la
          aplicación. Capacidad de respuesta y adaptabilidad a diferentes
          dispositivos y resoluciones de pantalla.
        </p>
        <div className="component-info">
          <h3>Import:</h3>
          <Code>{`import { Toasts, toast } from 'pragmate-ui/toast';`}</Code>
          <Code>{implementation}</Code>
          <main className="component-container">
            <div className="column">
              <h3>Result:</h3>
            </div>
            <div className="column">
              <h3>Implementation:</h3>
            </div>
            <div className="box">
              <h3>Case success toast:</h3>
              <Button
                data-type="success"
                data-message="This is an example of success toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show success Toast
              </Button>
            </div>
            <div className="box__implementation">
              <Code>{implementationSuccess}</Code>
            </div>

            <div className="box">
              <h3>Case error toast:</h3>
              <Button
                data-type="error"
                data-message="This is an example of error toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show error Toast
              </Button>
            </div>
            <div className="box__implementation">
              <Code>{implementationError}</Code>
            </div>

            <div className="box">
              <h3>Case warning toast:</h3>
              <Button
                data-type="warning"
                data-message="This is an example of warning toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show warning Toast
              </Button>
            </div>
            <div className="box__implementation">
              <Code>{implementationWaring}</Code>
            </div>
            <div className="box">
              <h3>Case info toast:</h3>
              <Button
                data-type="info"
                data-message="This is an example of info toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show info Toast
              </Button>
            </div>
            <div className="box__implementation">
              <Code>{implementationInfo}</Code>
            </div>
            <div className="box">
              <h3>Case loading toast:</h3>
              <Button
                data-type="loading"
                data-message="This is an example of loading toast"
                className="btn btn-primary"
                onClick={toggleToast}
              >
                Show loading Toast
              </Button>
            </div>
            <div className="box__implementation">
              <Code>{implementationLoading}</Code>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
