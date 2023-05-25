import { structureItems } from "../structure-item";

const obj = ([id, label]) => ({ id, label });

const tutorial = structureItems([
    "tutorial/start", // el objeto debe llamarse TutorialStart
    "tutorial/first-module",
    "tutorial/backend",
    "tutorial/routing",
]);

const base = ["intro", "quick-start"];
const items = [...base, ["tutorial", tutorial]];
const children = structureItems(items);
export const starting = {
    id: "getting-start",
    children,
};
