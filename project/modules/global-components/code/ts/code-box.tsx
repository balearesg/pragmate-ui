import * as React from "react";
import { Code } from "./code";
import { AppIconButton } from "pragmate-ui/icons";
import { Clipboard } from "./clipboard";
export /*bundle*/ function CodeBox({ title, language, children }) {
  return (
    <div className="code__box">
      <header>
        <div className="tab active">{title}</div>
        <Clipboard text={children} message="" />
      </header>
      <section className="box__code">
        <Code language={language} clipboard={false}>
          {children}
        </Code>
      </section>
    </div>
  );
}
