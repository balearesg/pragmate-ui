import * as React from "react";
import { Button } from "pragmate-ui/form";
import { Item } from "./item";
import { Code } from "pragmate-ui/code";
import { getTpl } from "./get-tpl";
export /*bundle*/
function View() {
  // color, outline
  const buttons = [
    "primary",
    "secondary",
    "tertiary",
    "success",
    "warning",
    "danger",
    "info",
    "link",
  ];

  const output = buttons.map((button, index) => (
    <Item variant={button} key={index} />
  ));
  return (
    <div className="view">
      <h1>Buttons</h1>
      <p>
        El componente de botón se utiliza para crear elementos interactivos que
        permiten a los usuarios realizar acciones específicas, como enviar
        formularios, confirmar selecciones o desencadenar eventos en la
        interfaz.
      </p>
      <p>Variantes</p>
      Las variantes del botón se pueden definir, por medio del atributo{" "}
      <code>variant</code>
      <h3>Variantes</h3>
      <div className="inline__list__container">
        {buttons.map((item) => (
          <Button key={item} variant={item}>
            variant="{item}"
          </Button>
        ))}
      </div>
      <div>
        <Code>{getTpl({ variant: "primary" })}</Code>
      </div>
      <h3>Variantes outline</h3>
      <p>
        Se puede utilizar cada variante con borders pasando el atributo
        booleando `bordered={`{true}`}`{" "}
      </p>
      <div className="inline__list__container">
        {buttons.map((item) => (
          <Button key={item} variant={item} bordered={true}>
            variant="{item}"
          </Button>
        ))}
      </div>
      <div>
        <Code>{getTpl({ variant: "primary", bordered: true })}</Code>
      </div>
    </div>
  );
}
