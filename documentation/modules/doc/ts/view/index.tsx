import React from "react";
import { Nav } from "@bgroup/documentation-ui/nav";
import { CopyableImplementation } from "@bgroup/documentation-ui/copyable-implementation";
import { FormColorPicker } from "documentation-ui/form-color";

export function Page() {
  const [show, setShow] = React.useState(false);
  function handleModalColor() {
    setShow(!show);
  }
  return (
    <>
      <div className="doc__bg"></div>
      <Nav />
      <div className="wrapper">
        <aside className="doc__nav">
          <ul>
            <li className="js-btn selected">Get Started</li>
            <li className="js-btn">Configuration</li>
            <li className="js-btn">Keybindings</li>
            <li className="js-btn">Issues</li>
            <li onClick={handleModalColor} className="js-btn">
              Form Color
            </li>
          </ul>
        </aside>
        <article className="doc__content">
          <section className="js-section">
            <h3 className="section__title">Get Started</h3>
            <p>
              Learn how to configure settings for bgroup/ui, such as your syntax
              highlighting preference and the default saving folder location.
            </p>
            <h3 className="section__title">Installation</h3>
            <div className="code__block code__block--notabs">
              <pre className="code code--block">
                <CopyableImplementation>
                  {`npm i @bgroup/ui `}
                </CopyableImplementation>
              </pre>
            </div>
          </section>

          <section className="section__modal-color">
            <FormColorPicker show={show} handleModalColor={handleModalColor} />
          </section>

          <section className="js-section">
            <h3 className="section__title">Keybindings</h3>
            <p>
              Lorem ipsum dolor sit amet, scripta tibique indoctum sit ei, mel
              inani aeterno ad. Facer oratio ex per. At eam movet verear, in sea
              brute patrioque disputando, usu nonumes torquatos an. Ex his
              quaerendum intellegebat, ut vel homero accusam. Eum at debet
              tibique, in vocibus temporibus adversarium sed. Porro verear eu
              vix, ne usu tation vituperata.
            </p>
            <p>
              Malis percipitur an pro. Pro aperiam persequeris at, at sonet
              sensibus mei, id mea postulant definiebas concludaturque. Id qui
              malis abhorreant, mazim melius quo et. At eam altera dolorum, case
              dicant lobortis ius te, ad vel affert oportere reprehendunt. Quo
              no verterem deseruisse, mea brute postea te, ne per tacimates
              suavitate vituperatoribus.
            </p>
            <p>
              Malis percipitur an pro. Pro aperiam persequeris at, at sonet
              sensibus mei, id mea postulant definiebas concludaturque. Id qui
              malis abhorreant, mazim melius quo et. At eam altera dolorum, case
              dicant lobortis ius te, ad vel affert oportere reprehendunt. Quo
              no verterem deseruisse, mea brute postea te, ne per tacimates
              suavitate vituperatoribus.
            </p>
            <hr />
          </section>
          <section className="js-section">
            <h3 className="section__title">Issues</h3>
            <p>
              Lorem ipsum dolor sit amet, scripta tibique indoctum sit ei, mel
              inani aeterno ad. Facer oratio ex per. At eam movet verear, in sea
              brute patrioque disputando, usu nonumes torquatos an. Ex his
              quaerendum intellegebat, ut vel homero accusam. Eum at debet
              tibique, in vocibus temporibus adversarium sed. Porro verear eu
              vix, ne usu tation vituperata.
            </p>
            <p>
              Malis percipitur an pro. Pro aperiam persequeris at, at sonet
              sensibus mei, id mea postulant definiebas concludaturque. Id qui
              malis abhorreant, mazim melius quo et. At eam altera dolorum, case
              dicant lobortis ius te, ad vel affert oportere reprehendunt. Quo
              no verterem deseruisse, mea brute postea te, ne per tacimates
              suavitate vituperatoribus.
            </p>
          </section>
        </article>
      </div>

      <footer className="footer">bgroup/ui ©Copyright </footer>
    </>
  );
}
