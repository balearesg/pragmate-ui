import * as React from "react";
import { BEYOND_ICONS, Icon, IconButton } from "pragmate-ui/icons";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View(): JSX.Element {
  const users = {
    viewBox: "",
    icon: `<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>`,
  };

  return (
    <div className="view">
      <h1 className="view__h1">IconButton</h1>
      <p className="view__p">
        El componente <span className="view__span">Icon Button</span>son un tipo
        de botón que utiliza un icono para representar la acción que realiza. Se
        usan comúnmente en barras de herramientas, barras de aplicaciones y
        otras áreas donde el espacio es limitado. Los Icon Button se pueden usar
        para realizar una variedad de acciones, como abrir una nueva ventana,
        navegar a una página diferente o realizar una búsqueda. Para usar un
        botón de icono, primero debe importar el componente a su proyecto. Puede
        cambiar el icono de su componente con el atributo icon.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { IconButton } from 'pragmate-ui/icons';`}</Code>
        <div className="component-implementation icon-button">
          <h3>Implementation:</h3>
          <Code>{`<IconButton icon="search" />`}</Code>
          <Code>{`const users = {
    viewBox: "",
    icon: '<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3
    -3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>',
  };
    <IconButton icon={users.icon} viewBox={users.viewBox} />
            `}</Code>
          <main className="component-container">
            <h3>Result:</h3>
            <div className="content-result">
              <IconButton icon="delete" />
              <IconButton icon={users.icon} viewBox={users.viewBox} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
