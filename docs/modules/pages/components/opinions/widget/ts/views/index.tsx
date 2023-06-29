import * as React from "react";
import { Result } from "./result";
import { Code } from "pragmate-ui/code";
import { Opinions } from "pragmate-ui/opinions";
import { opinionsList } from "./opinions-list";
import { implementation } from "./implementation";
import { implementationList } from "./implementation-list";
export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1 className="view__h1">Opinions</h1>
      <p className="view__p">
        El componente <span className="view__span">Opinions</span> es un
        componente de React que se utiliza para mostrar una sección de
        testimonios o comentarios de usuarios. El componente utiliza el paquete
        pragmate-ui/swiper-component para implementar un carrusel que permite
        desplazarse entre los diferentes testimonios.
      </p>

      <p>
        Para usar el componente, debes importarlo en tu archivo y luego
        renderizarlo en tu componente principal. El componente recibe una prop
        llamada <code>opinions</code>, que es un arreglo de objetos que contiene
        las propiedades necesarias para generar varias instancias del
        componente.
      </p>
      <p>Cada objeto del arreglo debe tener las siguientes propiedades:</p>
      <ul>
        <li>
          <code>name</code>: El nombre del usuario que dejó el testimonio.
        </li>
        <li>
          <code>src</code>: La URL de la imagen de perfil del usuario.
        </li>
        <li>
          <code>profession</code> (opcional): La profesión o cargo del usuario.
        </li>
        <li>
          <code>comment</code>: El comentario o testimonio del usuario.
        </li>
        <li>
          <code>alt</code> (opcional): El texto alternativo para la imagen de
          perfil.
        </li>
      </ul>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { Opinions } from "pragmate-ui/opinions"`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          {" "}
          <h4>Estructura del arreglo de objetos :</h4>
          <Code>{implementationList}</Code>
          <h4>Implementacion del componente :</h4>
          <Code>{implementation}</Code>
        </div>
        <div className="component-result">
          <h3>Result:</h3>
          <Opinions opinions={opinionsList} />
        </div>
      </div>
    </div>
  );
}
