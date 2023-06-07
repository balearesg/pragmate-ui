import * as React from "react";
import { BEYOND_ICONS } from "pragmate-ui/icons";
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
      <h1 className="view__h1">Icon List</h1>
      <p className="view__p">
        Una colección de iconos que se pueden utilizar para representar una
        variedad de objetos, acciones y conceptos. Los íconos están diseñados
        para ser consistentes en estilo y tamaño, haciéndolos fáciles de usar y
        comprender. Están prediseñados y optimizados para su uso en la web. Son
        consistentes en estilo y tamaño, haciéndolos fáciles de usar y entender.
        Están disponibles en una variedad de formatos, por lo que puede usarlos
        en su código o en sus diseños. Si está buscando una manera de agregar
        interés visual y claridad a su contenido. Son fáciles de usar y se
        pueden personalizar para satisfacer sus necesidades específicas.
      </p>
      <div className="view__list-icons">
        <h3>Icons list:</h3>
        <Search onSearch={onSearch} />
        <div className="view__list-output">{output}</div>
      </div>
    </div>
  );
}
