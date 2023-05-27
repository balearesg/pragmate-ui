import * as React from "react";
import { implementation } from "./implementation";
import { Results } from "./results";
import { Code } from "@bgroup/ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <h1 className="view__h1">Tabs</h1>
      <p className="view__p">
        El componente <span className="view__span">Tabs</span> Este componente
        permite a los usuarios navegar entre diferentes secciones de contenido
        utilizando pestañas. El componente Tabs es especialmente útil para
        aplicaciones web y de escritorio que requieren presentar información en
        secciones separadas y accesibles. Muestra una lista de pestañas para
        navegar entre diferentes secciones de contenido. Personalización de
        estilos y configuraciones. Soporte para navegación por pestañas,
        arrastrando y gestos táctiles. Puede mostrar cualquier tipo de contenido
        en una pestaña utilizando slots.
      </p>
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { TabsContent, BeyondTabs, Tabs } from "@bgroup/ui/tabs";`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation: </h3>
          <Code>{implementation}</Code>
          <div className="component-detail">
            <h4>Additional Information:</h4>
            <div>
              <p>
                If you pass the<code>data-path</code> property over the tabs
                each tab will do a<code>routing.replaceState</code> on the value
                passed to data-path. tab will do a routing.replaceState on the
                value passed to <code>data-path</code>
              </p>
            </div>
          </div>
        </div>
        <div className="component-result">
          <h3>Result:</h3>
          <Results />
        </div>
      </div>
    </div>
  );
}
