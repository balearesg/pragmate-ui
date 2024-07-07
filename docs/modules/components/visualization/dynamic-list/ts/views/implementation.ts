export const implementationSimple = `
  <Provider
      name="myDynamicList"
      value={initialItems}
      onChange={handleListChange}
      draggable={true}
      Item={({ children }) => <div>{children}</div>}
      specs={{ /* tus especificaciones aquí */ }}
      className="my-dynamic-list"
    >
      <Header>
        Mi title
      </Header>
      <List />
      <AddDynamicItem />
  </Provider>
`;