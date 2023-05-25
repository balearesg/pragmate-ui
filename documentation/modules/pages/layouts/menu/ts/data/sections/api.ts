import { structureItems } from "../structure-item";

const children = [
    ["api/uri", "URI"],
    ["api/BeyondWidget", "Objeto widget"],
    ["api/IWidgetStore", "IWidgetStore"],
];
export const api = {
    id: "reference",
    label: "API",
    children: structureItems(children),
};
