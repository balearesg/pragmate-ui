export const example = `
const onChange = (event, index) => {
    toast.info(\`Tab \${index + 1} selected\`);
};

<TabsContainer onChange={onChange} active={0}>
    <Tabs>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
    </Tabs>
    <Panes>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
    </Panes>
</TabsContainer>
`;
