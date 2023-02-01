import * as React from "react";
import { Header } from "@bgroup/ui/header";
import { BEYOND_ICONS, BeyondIcon, BeyondIconButton } from "@bgroup/ui/icon";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
import { Item } from "./item";
import { Search } from "./search";

export /*bundle*/
function View(): JSX.Element {
  const keyIcons: string[] = Object.keys(BEYOND_ICONS);
  const [items, setItems] = React.useState<string[]>(keyIcons);
  const output: JSX.Element[] = items.map((item: string): JSX.Element => {
    return <Item key={item} icon={item} />;
  });
  const onSearch = (value: string): void => {
    const filterIcons: string[] = keyIcons.filter((icon: string): boolean =>
      icon.toLowerCase().includes(value.trim().toLowerCase())
    );
    setItems(filterIcons);
  };
  return (
   
      <div className="view">
        <Header componentName="Icons" />
        <div className="component-info">
          <h3>Import:</h3>
          <CopyableImplementation>{`import { BeyondIcon } from '@bgroup/ui/icon';`}</CopyableImplementation>
          <CopyableImplementation>{`import { BeyondIconButton } from '@bgroup/ui/icon';`}</CopyableImplementation>
        </div>
        <div className="component-implementation">
          <div className="component-info">
            <h3>Implementation:</h3>
            <CopyableImplementation>{`<BeyondIcon icon="delete" />`}</CopyableImplementation>
            <CopyableImplementation>{`<BeyondIconButton icon="search" />`}</CopyableImplementation>
          </div>
          <div className="component-result">
            <h3>Result:</h3>
            <div className="content-result">
              <BeyondIcon icon="delete" />
              <BeyondIconButton icon="search" />
            </div>

            <h3>Icon size xs</h3>
            <ImplementationResult code={`<BeyondIcon className="xs" icon="delete" />`}>
              <BeyondIcon className="xs" icon="delete" />
            </ImplementationResult>
            <h3>Icon size md</h3>
            <ImplementationResult code={`<BeyondIcon className="md" icon="delete" />`}>
              <BeyondIcon className="md" icon="delete" />
            </ImplementationResult>
            <h3>Icon size lg</h3>
            <ImplementationResult code={`<BeyondIcon className="lg" icon="delete" />`}>
              <BeyondIcon className="lg" icon="delete" />
            </ImplementationResult>
          </div>
        </div>
        <section className="list-container">
          <h4>Icons list:</h4>
          <Search onSearch={onSearch} />
          <div className="container-icons">{output}</div>
        </section>
      </div>
  );
}
