import * as React from "react";

interface Props {
  children?: string;
  tag?: any;
  text?: string;
}

export /*bundle*/ function Title(props: Props) {
  const { children, tag = "h1", text } = props;
  const Selector = tag;
  const content: string = text ?? children;
  let specs: any = { ...props };

  delete specs.children;
  delete specs.tag;
  delete specs.text;

  const replace = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };

  let id = content
    .trim()
    .replace(/[áéíóúÁÉÍÓÚ]/g, (match) => replace[match] || "");
  id = `${id.trim().replace(/[^a-zA-Z0-9 ]/g, "")}`
    .replace(/ /g, "-")
    .toLowerCase();

  specs.id = id;

  return (
    <Selector className="title-doc" {...specs}>
      {content}
    </Selector>
  );
}
