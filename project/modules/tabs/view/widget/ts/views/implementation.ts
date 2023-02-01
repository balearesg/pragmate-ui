export const implementation = `
export function ImplementationTabs() {
    const [tab, setTab] = React.useState<number>(0);

	return (
        <BeyondTabs selected={tab}>
        <Tabs selected={tab}>
            <button onClick={() => setTab(0)}>TAB 0</button>
            <button onClick={() => setTab(1)}>TAB 1</button>
            <button onClick={() => setTab(2)}>TAB 2</button>
            <button onClick={() => setTab(3)}>TAB 3</button>
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

