import * as React from "react";
import { Result } from "./results";
import { useBinder } from "@beyond-js/react-18-widgets/hooks";
import Content from "./content.mdx";
import { Code } from "pragmate-ui/code";

export /*bundle*/
function View({ store }) {
  const [reset, setReset] = React.useState<number>(0);
  useBinder(
    [store],
    () => {
      setReset(store.count);
    },
    "hide"
  );

  return (
    <div className="view beyond-image-view">
      <Content />
      <Result reset={reset} />
    </div>
  );
}
