import React from "react";
import { Code } from "pragmate-ui/code";
export function Page() {
  return (
    <>
      <div className="doc__bg"></div>
      <div className="wrapper">
        <article className="doc__content">
          <section className="js-section">
            <h3 className="section__title">Get Started</h3>
            <p>
              Welcome, in our left menu you can search for the components you
              need to use. You are reminded to install the library in case you
              haven't installed it yet.
            </p>
            <h3 className="section__title">Installation</h3>
            <div className="code__block code__block--notabs">
              <pre className="code code--block">
                <Code>{`npm i @bgroup/ui `}</Code>
              </pre>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
