import * as React from "react";
import { Button } from "pragmate-ui/form";
import { Item } from "./item";
import { Code } from "pragmate-ui/code";
import { Link } from "pragmate-ui/link";
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
      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { Button } from 'pragmate-ui/form';`}</Code>
      </div>
      <h2>Variantes</h2>
      Las variantes del botón se pueden definir, por medio del atributo{" "}
      <div className="inline__list__container">
        {buttons.map((item) => (
          <Button key={item} variant={item}>
            variant="{item}"
          </Button>
        ))}
      </div>
      <h3>Implementation: </h3>
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
      <h2>Iconos</h2>
      <p>
        Para agregar iconos al botón, agrega el atributo <code>icon</code> y el
        icono que desees utilizar. Puedes ver la lista de iconos disponibles en{" "}
        <Link href="/icons">Icons</Link>
      </p>
      <div className="inline__container inline__container--source-container">
        <Button icon="add" variant="primary">
          Primary button
        </Button>
        <div className="code__container">
          <Code>{getTpl({ variant: "primary", icon: "add" })}</Code>
        </div>
      </div>
      <p>
        Utiliza la clase <code>.icon--right</code> si deseas agregar el icono a
        la derecha
      </p>
      <div className="inline__container inline__container--source-container">
        <Button icon="add" variant="primary" className="icon--right">
          Primary button
        </Button>
        <div className="code__container">
          <Code>
            {getTpl({
              variant: "primary",
              icon: "add",
              className: "icon--right",
            })}
          </Code>
        </div>
      </div>
    </div>
  );
}
