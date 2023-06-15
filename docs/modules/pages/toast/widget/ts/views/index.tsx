import * as React from "react";
import { Toasts } from "pragmate-ui/toast";

import { View } from "./view";
export /*bundle*/
function Page() {
  return (
    <>
      <Toasts
        position={{
          bottom: "2rem",
          right: "2rem",
        }}
      />
      <View />;
    </>
  );
}
