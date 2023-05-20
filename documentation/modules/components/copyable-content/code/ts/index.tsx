import * as React from "react";
//import { toast } from '@bgroup/ui/toast';
import { IconButton } from "@bgroup/ui/icons";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

type props = {
  children: any;
  language: Language;
};
export /*bundle*/ function CopyableImplementation({
  children,
  language = "jsx",
}: props) {
  function copy() {
    navigator.clipboard.writeText(children);
    //toast.success('Copied implementation');
  }

  return (
    <div className="copyable-content">
      <div className="code">
        <Highlight {...defaultProps} code={children} language={language}>
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
