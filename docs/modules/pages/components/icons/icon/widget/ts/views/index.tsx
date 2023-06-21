import * as React from "react";
import { BEYOND_ICONS, Icon, IconButton } from "pragmate-ui/icons";
import { Item } from "./item";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View(): JSX.Element {
  const users = {
    viewBox: "",
    icon: `<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>`,
  };

  return (
    <div className="view">
      <h1 className="view__h1">Icon</h1>
      <p className="view__p">
        El componente <span className="view__span">Icon</span> es un elemento de
        interfaz de usuario que representa una imagen icónica, como un ícono de
        sistema operativo o un ícono personalizado. Excelente componente para
        facilitar la comunicación visual en una interfaz de usuario, ayudando a
        los usuarios a comprender rápidamente el propósito de un botón o enlace.
        tambien mejora la apariencia y el atractivo, Los iconos pueden mejorar
        la apariencia de una aplicación, haciendo que se vea más interesante y
        atractivo.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { Icon } from 'pragmate-ui/icons';`}</Code>
        <div className="component-implementation component-implementation-icon">
          <h3>Implementation:</h3>
          <Code className="component-implementation__code">{`<Icon icon="delete" />`}</Code>
          <Code className="component-implementation__code">{`
const users = {
  viewBox: "",
  icon: '<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0
  1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>',
};

<Icon icon={users.icon} viewBox={users.viewBox} />`}</Code>

          <main className="component-container component-container__icon">
            <h3>Result:</h3>
            <div className="content-result">
              <Icon icon="delete" />
              <Icon icon={users.icon} viewBox={users.viewBox} />
            </div>
            <h3>
              Manejo de <code>Circle</code> :
            </h3>
            <p>
              los componentes tambien pueden manejar una forma circular, se
              pueden obtener agregando la clase circle en el componente:
            </p>
            <Code>{`<IconButton className="circle" icon="box" />`}</Code>
            <IconButton className="circle" icon="delete" />
            <h3>
              Manejo de <code>Size</code> :
            </h3>
            <p>
              los componentes <code>Icon</code> pueden manejar 3 tipos de
              tamaños diferentes:
            </p>
            <ul>
              <li>
                <code>xs</code>
              </li>
              <li>
                <code>md</code>
              </li>
              <li>
                <code>lg</code>
              </li>
            </ul>
            <p>
              y se pueden incorporar agregando el atributo{" "}
              <code>className</code> al componente <strong>Icon</strong> y el
              tamaño que queramos.
            </p>
            <h3>
              Icon size <code>xs</code>
            </h3>
            <Code>{`<Icon className="xs" icon="sun" />`}</Code>
            <Icon className="xs" icon="sun" />
            <h3>
              Icon size <code>md</code>{" "}
            </h3>
            <Code>{`<Icon className="md" icon="sun" />`}</Code>
            <Icon className="md" icon="sun" />
            <h3>
              Icon size <code>lg</code>{" "}
            </h3>
            <Code>{`<Icon className="lg" icon="sun" />`}</Code>
            <Icon className="lg" icon="sun" />
          </main>
        </div>
      </div>
    </div>
  );
}
