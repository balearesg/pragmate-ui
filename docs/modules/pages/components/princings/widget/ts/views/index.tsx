import * as React from "react";
import { Code } from "pragmate-ui/code";
import { implementation } from "./implementation";
import { Results } from "./result";
import { ResultsPremium } from "./result-premium";
import { ResultsFree } from "./result-free";
export /*bundle*/
function View() {
  return (
    <div className="view view-pricing">
      <h1 className="view__h1">Pricing</h1>
      <p className="view__p">
        El componente <span className="view__span">Pricing</span> es un
        componente de React que permite mostrar diferentes planes de precios en
        una página web o aplicación. Este componente acepta varias props que
        permiten personalizar el título, el precio, la descripción y las
        funciones adicionales de cada plan de precio.
      </p>

      <div className="component-info">
        <h3>Import: </h3>
        <Code>{`import { Pricing } from 'pragmate-ui/pricing';`}</Code>
      </div>

      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
        </div>
        <div className="component-result component-result-precing">
          <span>
            <h3>Result:</h3>
            <Results />
          </span>
          <div className="container__p-pricing">
            <h3 className="view__h3-props">Props :</h3>
            <ul>
              <li>
                <strong>Variant :</strong> variante del pricing que desea
                asignar, "free" o "premium".
              </li>
              <li>
                <strong>Title :</strong> titulo del pricing.
              </li>
              <li>
                <strong>Description :</strong> descripcion del pricing.
              </li>
              <li>
                <strong>Price :</strong> precio que desee indicar al pricing
                (esta propiedad solo es requerida en la variante "premium").
              </li>
              <li>
                <strong>Advantages :</strong> lista de los beneficios de su
                pricing, esta propiedad recibe un arreglo donde estara los
                beneficios.
              </li>
            </ul>
            <p className="view__p">
              los <strong>pricing</strong> proporciona valores predeterminados
              para cada prop en caso de que no se proporcionen explícitamente.
              Esto hace que sea más fácil para el usuario personalizar solo las
              props que desea, sin tener que preocuparse por proporcionar todas
              las props necesarias.
            </p>
          </div>
        </div>
      </div>
      <h3>Variant:</h3>
      <p className="view__p p-pricing">
        El componente <strong>Pricing</strong> utiliza otros componentes de
        variantes de precio (FreePlan y PremiumPlan) para renderizar la
        información correspondiente a cada plan de precio. El nivel de precio se
        especifica mediante la prop <strong>"Variant"</strong>:
      </p>
      <div className="content-result">
        <div className="result">
          <h4>Variant Free</h4>
          <ResultsFree />
        </div>
        <div className="result">
          <h4>Variant Premiun</h4>
          <ResultsPremium />
        </div>
      </div>
    </div>
  );
}
