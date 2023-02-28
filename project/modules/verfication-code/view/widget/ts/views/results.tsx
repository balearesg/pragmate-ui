import * as React from "react";
import { InputCode } from "@bgroup/ui/code-verification";

export function Result({reset}) {
 
  const [code, setCode] = React.useState<string>("");
  const onCodeFull = (code: string): void => setCode(code);
  return (
    <InputCode
      className="code-result"
      length={6}
      onCodeFull={onCodeFull}
      onlyNumber={false}
      reset={reset}
    />
  );
}
