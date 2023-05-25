import * as React from "react";
import { Header } from "@bgroup/ui/header";
import { Spinner } from "@bgroup/ui/spinner";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { ImplementationResult } from "@bgroup/ui/implementation-result";

export /*bundle*/
function View() {
  return (
    <div className="view">
      {/* <Header componentName="Spinner" /> */}
      <div className="component-info">
        <h3>Import:</h3>
        <CopyableImplementation>{`import { Spinner } from '@bgroup/ui/spinner';`}</CopyableImplementation>
        <main className="component-container">
          <div className="column">
            <h3>Result:</h3>
          </div>
          <div className="column">
            <h3>Implementation:</h3>
          </div>

          <div className="box">
            <h3>Spinner color:</h3>
            <Spinner color="#617096" className="spinner" />
          </div>
          <CopyableImplementation>{`<Spinner color="#617096" className="spinner" />`}</CopyableImplementation>

          <div className="box">
            <h3>Spinner primary:</h3>
            <Spinner primary className="spinner" />
          </div>
          <CopyableImplementation>{`<Spinner primary className="spinner" />`}</CopyableImplementation>

          <div className="box">
            <h3>Spinner secondary:</h3>
            <Spinner secondary className="spinner" />
          </div>
          <CopyableImplementation>{`<Spinner secondary className="spinner" />`}</CopyableImplementation>

          <div className="box">
            <h3>Spinner size defined:</h3>
            <Spinner size="80px" className="spinner" />
          </div>
          <CopyableImplementation>{`<Spinner size="80px" className="spinner" />`}</CopyableImplementation>
        </main>
      </div>
    </div>
  );
}
