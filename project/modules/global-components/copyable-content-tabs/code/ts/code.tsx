import * as React from "react";
import { IconButton } from "pragmate-ui/icons";
import Highlight, { defaultProps } from "prism-react-renderer";
import { toast } from "pragmate-ui/toast";
export function CopyableImplementation({ code }) {
  function copy() {
    navigator.clipboard.writeText(code);
    toast.success("Copied implementation");
  }

  return (
    <div className="copyable-content">
      <div className="code">
        <Highlight {...defaultProps} code={code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <code className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          )}
        </Highlight>
      </div>
      <IconButton icon="copy" onClick={copy} className="copy-button" />
    </div>
  );
}
