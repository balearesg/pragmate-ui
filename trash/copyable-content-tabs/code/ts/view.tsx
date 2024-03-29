import React, { PropsWithChildren } from "react";
import { TabsContent, TabsContainer, Tabs } from "pragmate-ui/tabs";
import { IconButton } from "pragmate-ui/icons";
import { CopyableImplementation } from "./code";
export /*bundle*/ function ImplementationResult({
  code,
  children,
}: PropsWithChildren<{ code: string }>): JSX.Element {
  const [tab, setTab] = React.useState<number>(0);
  return (
    <TabsContainer selected={tab}>
      <Tabs selected={tab}>
        <IconButton
          data-tooltip="Result"
          className="tooltip"
          icon="result"
          onClick={() => setTab(0)}
        />
        <IconButton
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
    </TabsContainer>
  );
}
