import * as React from "react";
import * as ContentsES from "pragmate-ui-docs/es";
import { routing } from "@beyond-js/kernel/routing";
const DEFAULT_CONTENT = "NotFound";
export /*bundle*/
function View({ uri }) {
  const content = uri.vars.get("content");
  const contentId = !content ? DEFAULT_CONTENT : content;
  const replace = (text) => text.replace(text[0], text[0].toUpperCase());
  const name = contentId.split("-").map(replace).join("");

  const Content = ContentsES[name] || ContentsES[DEFAULT_CONTENT];
  return (
    <>
      <Content />
    </>
  );
}
