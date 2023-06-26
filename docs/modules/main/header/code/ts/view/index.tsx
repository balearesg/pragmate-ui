import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";
import { Button } from "pragmate-ui/form";
import { Code } from "pragmate-ui/code";

export /* bundle */ function Header() {
  function goDocs() {
    routing.pushState("/components/introduction");
  }

  return (
    <header className="home__header">
      <div className="home__header-main-content">
        <h1>Reusable, Flexible, Essential</h1>
        <p>
          Save time for you and your team by using pre-built, modular, and
          essential <strong>Pragmate UI</strong> components.
        </p>
      </div>

      <div className="started">
        <Code>{`npm i @pragmate/ui `}</Code>
        <Button variant="secondary" bordered onClick={goDocs}>
          Get Started
        </Button>
      </div>
    </header>
  );
}
