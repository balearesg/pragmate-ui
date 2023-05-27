import * as React from "react";
import { BEYOND_ICONS, Icon, IconButton } from "@bgroup/ui/icons";
import { CopyableImplementation } from "@bgroup/ui/copyable-implementation";
import { ImplementationResult } from "@bgroup/ui/implementation-result";
import { Item } from "./item";
import { Search } from "./search";
import { Code } from "@bgroup/ui/code";

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
  const users = {
    viewBox: "",
    icon: `<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>`,
  };

  return (
    <div className="view">
      <div className="component-info">
        <h1 className="view__h1">Icon</h1>
        <p className="view__p">
          El componente <span className="view__span">Icon</span> eselemento de
          interfaz de usuario que representa una imagen icónica, como un ícono
          de sistema operativo o un ícono personalizado. Contamos con iconos
          normales y botones iconos. Excelente componente para facilitar la
          comunicación visual en una interfaz de usuario, ayudando a los
          usuarios a comprender rápidamente el propósito de un botón o enlace.
          tambien mejora la apariencia y el atractivo, Los iconos pueden mejorar
          la apariencia de una aplicación, haciendo que se vea más interesante y
          atractivo.
        </p>
        <h3>Import:</h3>
        <Code>{`import { Icon } from '@bgroup/ui/icons';`}</Code>
        <Code>{`import { IconButton } from '@bgroup/ui/icons';`}</Code>
        <h4>Icons list:</h4>
        <Search onSearch={onSearch} />
        <div className="container-icons">{output}</div>
        <div className="component-implementation">
          <h3>Implementation:</h3>
          <Code>{`<Icon icon="delete" />`}</Code>
          <Code>{`<IconButton icon="search" />`}</Code>
          <Code>{`
           const users = {
            viewBox: "",
            icon: '<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>',
            };
            <Icon icon={users.icon} viewBox={users.viewBox} />`}</Code>
          <Code>{`
           const users = {
            viewBox: "",
            icon: '<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>',
            };
            <IconButton icon={users.icon} viewBox={users.viewBox} />
            `}</Code>
          <main className="component-container">
            <h3>Result:</h3>
            <div className="content-result">
              <Icon icon="delete" />
              <IconButton icon="delete" />
              <Icon icon={users.icon} viewBox={users.viewBox} />
              <IconButton icon={users.icon} viewBox={users.viewBox} />
            </div>
            <h3>Icon size xs</h3>
            <ImplementationResult
              code={`<Icon className="xs" icon="delete" />`}
            >
              <Icon className="xs" icon="delete" />
            </ImplementationResult>
            <h3>Icon size md</h3>
            <ImplementationResult
              code={`<Icon className="md" icon="delete" />`}
            >
              <Icon className="md" icon="delete" />
            </ImplementationResult>
            <h3>Icon size lg</h3>
            <ImplementationResult
              code={`<Icon className="lg" icon="delete" />`}
            >
              <Icon className="lg" icon="delete" />
            </ImplementationResult>
          </main>
        </div>
      </div>
    </div>
  );
}
