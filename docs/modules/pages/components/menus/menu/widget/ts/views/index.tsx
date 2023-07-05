import * as React from "react";
import { implementation } from "./implementation";
import { Code } from "pragmate-ui/code";
import { Result } from "./result";
export /*bundle*/
function View() {
  return (
    <div className="view view-menu">
      <h1 className="view__h1">Menu</h1>
      <p>
        El componente <strong>Menu</strong> es una interfaz de usuario que
        permite a los usuarios acceder a diferentes opciones y acciones. El menú
        se despliega desde la izquierda al hacer clic en un icono y se contrae
        al hacer clic en el mismo icono o en cualquier otra área fuera del menú.
        Este componente es útil para agregar una funcionalidad de navegación o
        configuración a una aplicación web o móvil. Puede ser utilizado en
        conjunto con otros componentes para mejorar la experiencia de usuario y
        la accesibilidad.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { Menu } from "pragmate-ui/menu"`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
        </div>
        <p>
          El componente recibe dos propiedades : <code>Items</code> y{" "}
          <code>Title</code>.
          <ul>
            <li>
              <strong>Items :</strong> es un arreglo de objetos donde a cada
              objeto le especificamos el titulo del enlace, el icono y su path.
            </li>
            <li>
              <strong>Title :</strong> Header del menu.
            </li>
          </ul>
        </p>
        <div className="component-result">
          <h3>Result:</h3>
          <Result />
        </div>
      </div>
    </div>
  );
}
