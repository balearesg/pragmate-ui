import * as React from "react";
import { Spinner } from "pragmate-ui/spinner";
import { InlineCode } from "pragmate-ui/code";

interface ITypeArrays {
  bgs: string[];
  sizes: string[];
  types: string[];
}

export function SpinnerListShow({
  listName,
}: {
  listName: string | "bgs" | "size" | "types";
}): JSX.Element {
  const typeArrays: ITypeArrays = {
    bgs: ["on-primary", "on-secondary"],
    sizes: ["xs", "md", "lg", "xl"],
    types: ["primary", "secondary", "tertiary"],
  };

  return (
    <div className="content">
      {typeArrays[listName].map((type, index) => (
        <div key={index}>
          <Spinner type={type} active />
          <InlineCode>type={`"${type}"`}</InlineCode>
        </div>
      ))}
    </div>
  );
}
