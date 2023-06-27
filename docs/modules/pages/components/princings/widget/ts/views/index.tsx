import * as React from "react";
import { Code } from "pragmate-ui/code";
import { implementation } from "./implementation";
import { Results } from "./result";
import { ResultsPro } from "./result-pro";
import { ResultsMedium } from "./result-medium";
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
          <p className="view__p p-pricing">
            <p className="view__p">
              los <code>pricing</code> proporciona valores predeterminados para
              cada prop en caso de que no se proporcionen explícitamente. Esto
              hace que sea más fácil para el usuario personalizar solo las props
              que desea, sin tener que preocuparse por proporcionar todas las
              props necesarias.
            </p>
          </p>
        </div>
      </div>
      <h3>Level:</h3>
      <p className="view__p p-pricing">
        El componente <code>Pricing</code> utiliza otros componentes de nivel de
        precio (FreePlan, MediumPlan, PremiumPlan, y CustomPlan) para renderizar
        la información correspondiente a cada plan de precio. El nivel de precio
        se especifica mediante la prop level:
      </p>
      <div className="content-result">
        <div className="result">
          <h4>Level Free</h4>
          <ResultsFree />
        </div>
        <div className="result">
          <h4>Level Medium</h4>
          <ResultsMedium />
        </div>
        <div className="result">
          <h4>Level Pro</h4>
          <ResultsPro />
        </div>
      </div>
    </div>
  );
}
