import * as React from "react";
import { Button } from "pragmate-ui/form";
export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1 className="view__h1">Introducction</h1>
      <p className="view__p">
        ¡Bienvenido a la documentación de{" "}
        <strong className="view__strong">PragmateUI</strong>!
      </p>
      <p className="view__p">
        PragmateUI es una libreria que provee componentes reutilizables, rapidos
        y dinamicos para su pagina o aplicacion web ! Creados principalmente con{" "}
        <strong className="view__strong strong-react">React</strong> y{" "}
        <strong className="view__strong strong-beyondjs">BeyondJS</strong>.
      </p>

      <h3 className="view__h3">
        ¿Porque <strong className="view__strong">Pragmate UI</strong>?
      </h3>
      <p className="view__p">
        La idea principal es por su uso tan sencillo y adaptable de componentes
        reutilizables que permite que usted o su equipo ahorre tiempo mediante
        el uso de componentes preconstruidos, modulares y atractivos. Tambien
        una de las buenas cosas es por la gran variedad de componentes que
        ofrece <strong className="view__strong">Pragmate UI</strong>, desde
        botones hasta drag and drolls. Esta libreria incluye una variedad de
        componentes que se pueden importar e implementar fácilmente en su
        proyecto.
      </p>

      <h3 className="view__h3">Configuracion previa</h3>
      <p className="view__p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        dolores, magnam cum maiores soluta rerum odio natus totam saepe qui,
        sequi nisi culpa adipisci dolorum nulla. Doloribus incidunt eaque nam?
      </p>
      <h3 className="view__h3">Apoyanos</h3>
      <p className="view__p">
        Si desea apoyarnos colaborando con nosotros en la creacion de
        componentes o mejora de alguno de estos le dejamos nuestro{" "}
        <strong className="view__strong">Github</strong>.👇
      </p>
      <Button variant="primary" icon="paperPlane" className="icon--right">
        <a
          target="_blank"
          className="tag-a"
          href="https://github.com/balearesg/pragmate-ui"
        >
          {" "}
          Github
        </a>
      </Button>
    </div>
  );
}
