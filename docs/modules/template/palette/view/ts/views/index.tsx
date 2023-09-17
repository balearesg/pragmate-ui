import * as React from "react";
import { Palettes } from "./palettes";
import { SurfacesPanel } from "./SurfacesPanel";
import { Button } from "pragmate-ui/components";
import { ThemeSwitcher } from "pragmate-ui/theme-switcher";

export /*bundle*/
function View({ store }) {
  const [view, setView] = React.useState("palettes");

  const Views = {
    palettes: Palettes,
    surfaces: SurfacesPanel,
  };

  const onClick = (event) => {
    event.preventDefault();
    setView(event.currentTarget.dataset.view);
  };
  const Control = Views[view];
  console.log(12, Control, view);
  return (
    <main className="page__container">
      <h2>Template tones</h2>

      <div className="contents">
        <div className="contents__buttons">
          <Button onClick={onClick} variant="primary" data-view="palettes">
            Palettes
          </Button>
          <Button onClick={onClick} variant="primary" data-view="surfaces">
            Surfaces
          </Button>
        </div>
        <ThemeSwitcher />
      </div>

      <Control store={store} />
    </main>
  );
}