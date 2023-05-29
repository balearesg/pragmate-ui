import * as React from "react";
import { Nav } from "@bgroup/doc-ui/nav";
export /*bundle*/
function Page(): JSX.Element {
  return (
    <>
      <Nav />
      <div className="hero">
        <h1 className="hero__title">@bgroup/ui</h1>
        <p className="hero__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia{" "}
        </p>
      </div>
      <div className="hero__terminal">
        <pre>
          <code className="shell-session demo">Lorem ipsum dolor ~ $ </code>
        </pre>
      </div>
      <div className="wrapper-home">
        <div className="installation">
          <h3 className="section__title">Installation</h3>
          <div className="tab__container">
            <ul className="tab__menu">
              <li className="tab active" data-tab="mac">
                npm
              </li>
              <li className="tab" data-tab="linux">
                yarn
              </li>
            </ul>
            <pre className="nohighlight code">
              <code className="tab__pane active mac">npm i @bgroup/ui</code>
              <code className="tab__pane linux">npm i @bgroup/ui</code>
            </pre>
          </div>
        </div>
        <div className="feature">
          <div className="feature__item">
            <h3 className="section__title">Lorem ipsum</h3>
            <p>
              Start writing your notes immediately in any terminal! No more time
              wasted on navigating and opening your text editor.
            </p>
          </div>
          <div className="feature__item">
            <h3 className="section__title">Lorem ipsum</h3>
            <p>
              Save your file in Dropbox then you can access to it from anywhere.
            </p>
          </div>
          <div className="feature__item">
            <h3 className="section__title">Lorem ipsum</h3>
            <p>
              Encrypt your notes optionally. No one can get to your secrets!{" "}
            </p>
          </div>
          <div className="feature__item">
            <h3 className="section__title">Lorem ipsum</h3>
            <p>
              Maintain all your settings in a single{" "}
              <span className="code code--inline">config.json</span> file. Never
              need to redo the setting every single time jotting down a note.
            </p>
          </div>
          <div className="feature__item">
            <h3 className="section__title">Lorem ipsum</h3>
            <p>
              For better readability, bgroup/ui has a clean, beautiful color
              scheme allow you to scan files fast.
            </p>
          </div>
          <div className="feature__item">
            <h3 className="section__title">Lorem ipsum</h3>
            <p>
              You can expect common keybindings for bgroup/ui. Customize{" "}
              <span className="code code--inline">bindings.json</span> for your
              own liking!{" "}
            </p>
          </div>
        </div>

        <div className="callout">
          <p>
            Read our documentation for advanced keybindings and customization
          </p>
          <button className="btn btn-primary">Documentation</button>
        </div>
      </div>
      <div className="changelog">
        <div className="changelog__wrapper">
          <h3 className="section__title">Changelog</h3>
          <div className="changelog__item">
            <div className="changelog__meta">
              <h4 className="changelog__title">v0.7</h4>
              <small className="changelog__date">10/12/2017</small>
            </div>
            <div className="changelog__detail">
              <ul>
                <li>Improving the writing workflow with better key bindings</li>
                <li>Design updates</li>
                <li>SSL Verification for web hooks</li>
                <li>Render Emoji</li>
              </ul>
            </div>
          </div>
          <div className="changelog__item">
            <div className="changelog__meta">
              <h4 className="changelog__title">v0.6</h4>
              <small className="changelog__date">7/30/2017</small>
            </div>
            <div className="changelog__detail">
              <ul>
                <li>Adding Unicode support</li>
                <li>Basic text highlighting</li>
                <li>Fresh Design</li>
              </ul>
            </div>
          </div>
          <div className="changelog__item">
            <div className="changelog__meta">
              <h4 className="changelog__title">v0.5</h4>
              <small className="changelog__date">5/10/2017</small>
            </div>
            <div className="changelog__detail">
              <ul>
                <li>Save default md file in new folders</li>
                <li>Ability to quick search on existing notes</li>
              </ul>
            </div>
          </div>
          <div className="changelog__callout">
            <a href="#" className="button--secondary">
              Checkout Full Log
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">bgroup/ui ©Copyright </footer>
    </>
  );
}
