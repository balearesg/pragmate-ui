import * as React from "react";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { Result } from "./result";
import { implementation } from "./implementation";
import { Code } from "@bgroup/ui/code";

export /*bundle*/
function View() {
  return (
    <div className="view">
      <div className="component-info">
        <h3>Import:</h3>
        <Code>{`import { SwiperSlider } from "@bgroup/ui/swiper-component"`}</Code>
      </div>
      <div className="component-implementation">
        <div className="component-info">
          <h3>Implementation:</h3>
          <Code>{implementation}</Code>
        </div>
        <div className="component-result">
          <h3>Result:</h3>
          <Result />
        </div>
      </div>
    </div>
  );
}
