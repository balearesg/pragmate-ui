export type IItem = [string, string, IItem[]?];

export interface IComponent {
	component: IItem;
	children?: Array<{ name: string; path: string }>;
}
