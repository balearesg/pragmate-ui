export const implementation = `
export function ImplementationTabs() {
    const [tab, setTab] = React.useState<number>(0);

	return (
        <BeyondTabs selected={tab}>
        <Tabs selected={tab}>
            <button data-path="/components/beyond-tabs?tab=0" onClick={() => setTab(0)}>TAB 0</button>
            <button data-path="/components/beyond-tabs?tab=1" onClick={() => setTab(1)}>TAB 1</button>
            <button data-path="/components/beyond-tabs?tab=2" onClick={() => setTab(2)}>TAB 2</button>
            <button data-path="/components/beyond-tabs?tab=3" onClick={() => setTab(3)}>TAB 3</button>
        </Tabs>
        <TabsContent>
            <div><p>Tab Content 0</p></div>
            <div><p>Tab Content 1</p></div>
            <div><p>Tab Content 2</p></div>
            <div><p>Tab Content 3</p></div>
        </TabsContent>
    </BeyondTabs>
	);
  }
`;

