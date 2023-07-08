import * as React from "react";
import { Code } from "pragmate-ui/code";
import { implementation } from "./implementation";
import { Result } from "./result";
import { component } from "./component";
export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1>DropdownBottomMenu</h1>
      <p>
        Este componente <strong>DropdownBottomMenu</strong> es una interfaz de
        usuario que permite a los usuarios acceder a diferentes opciones y
        acciones. El menú se despliega desde la parte inferior de la pantalla al
        hacer clic en un botón y se contrae al hacer clic en el mismo botón o en
        cualquier otra área fuera del menú. Este componente es útil para agregar
        una funcionalidad de navegación o configuración a una aplicación web o
        móvil. Puede ser utilizado en conjunto con otros componentes para
        mejorar la experiencia de usuario y la accesibilidad.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { DropdownBottomMenu } from "pragmate-ui/menu"`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component">
          <h3>component :</h3>
          <Code>{component}</Code>
        </div>
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
        </div>
        <p>
          se utiliza el componente <strong>"DropdownBottomMenu"</strong> junto
          con el componente "IconButton" para crear un botón que despliega el
          menú al ser clickeado. La propiedad "handleClick" se utiliza para
          controlar el estado del menú y la propiedad "show" se utiliza para
          indicar si el menú debe ser visible o no. El contenido del menú se
          puede personalizar pasando cualquier tipo de elemento dentro del
          componente <strong>"DropdownBottomMenu"</strong>.
        </p>
        <div className="component-result">
          <h3>Result:</h3>
          <Result />
        </div>
      </div>
    </div>
  );
}
