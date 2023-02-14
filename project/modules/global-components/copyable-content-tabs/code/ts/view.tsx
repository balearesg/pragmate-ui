import React, { PropsWithChildren } from "react";
import { TabsContent, BeyondTabs, Tabs } from "@bgroup/ui/tabs";
import { BeyondIconButton } from "@bgroup/ui/icons";
import { CopyableImplementation } from "./code";
export /*bundle*/ function ImplementationResult({
  code,
  children,
}: PropsWithChildren<{ code: string }>): JSX.Element {
  const [tab, setTab] = React.useState<number>(0);
  return (
    <BeyondTabs selected={tab}>
      <Tabs selected={tab}>
        <BeyondIconButton
          data-tooltip="Result"
          className="tooltip"
          icon="result"
          onClick={() => setTab(0)}
        />
        <BeyondIconButton
          data-tooltip="Code"
          className="tooltip"
          icon="code"
          onClick={() => setTab(1)}
        />
      </Tabs>
      <TabsContent>
        {children}
        <CopyableImplementation code={code} />
      </TabsContent>
    </BeyondTabs>
  );
}
