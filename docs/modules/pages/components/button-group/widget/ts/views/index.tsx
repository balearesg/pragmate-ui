import * as React from "react";
import { ButtonGroup } from "pragmate-ui/components";
import { Code } from "pragmate-ui/code";
import { Button } from "pragmate-ui/form";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1>ButtonGroup</h1>
      <p>
        El componente de botón se utiliza para crear elementos interactivos que
        permiten a los usuarios realizar acciones específicas, como enviar
        formularios, confirmar selecciones o desencadenar eventos en la
        interfaz.
      </p>
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{` import { ButtonGroup } from 'pragmate-ui/components';`}</Code>
      </div>
      <ButtonGroup variant="primary" size="medium" orientation="row">
        <Button variant="primary" bordered="true">
          Button 1!
        </Button>
        <Button variant="primary" bordered="true">
          Button 2!
        </Button>
        <Button variant="primary" bordered="true">
          Button 3!
        </Button>
      </ButtonGroup>
    </div>
  );
}
