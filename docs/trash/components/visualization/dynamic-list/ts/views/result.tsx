import React from 'react';
import { Provider, List, AddDynamicItem, Header } from 'pragmate-ui/dynamic-list';

export function ResultDynamicList() {
  const handleListChange = (event) => {
    console.log('Lista actualizada:', event.target.value);
  };

  const initialItems = ['Item 1', 'Item 2'];

  return (
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
        Mi list
      </Header>
      <List />
      <AddDynamicItem />
    </Provider>
  );
}
