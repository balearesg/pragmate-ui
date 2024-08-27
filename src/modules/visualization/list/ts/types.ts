import { IPUIProps } from 'pragmate-ui/base';
import type { Reorder } from 'framer-motion';
/** Interface for the control type that can be reused across components. */
interface IItemControl<T, U = Record<string, any>> {
	control?:
		| string
		| React.ElementType<
				{
					item: IListItem<T, U>;
					index: number;
					data: IListItem<T, U>;
					children?: React.ReactNode;
				} & U
		  >;
}

/**
 * Interface for the properties of the `ItemList` component.
 *
 * @template T - The type of the items in the list.
 * @template U - Type for additional optional properties (default is a generic object).
 */
export interface IListItem<T, U = Record<string, any>> extends IPUIProps, IItemControl<T, U> {
	/** Index key for the item in the list. */
	index: string;

	/** Individual item in the list. */
	item: T;

	/** Index of the item in the list. */
	idx: number;

	/** Type of the HTML container for the item (default is 'li'). */
	as?: keyof React.ReactHTML;

	/** Additional optional properties. */
	specs?: U;
}

export interface IListProps<T extends IListItem<any, any>, U = Record<string, any>>
	extends IPUIProps,
		IItemControl<T, U> {
	/** Index key for the list. */
	index: string;

	/** Array of items in the list. */
	items: T[];

	/** Additional parameters to be passed to each item. */
	specs?: U;

	/** Enables dragging functionality if true. */
	draggable?: boolean;

	/** Position of children relative to the item (either 'top' or 'bottom'). */
	childrenPosition?: 'top' | 'bottom';

	/** Custom HTML or React element to render the list container. */
	as: keyof React.ReactHTML;

	/** Deprecated: Use 'as' instead for the container. */
	container: React.ElementType;
	empty: React.ElementType;
}

export interface IDraggableListProps<T extends IListItem<any, any>, U = Record<string, any>>
	extends Omit<React.ComponentProps<typeof Reorder.Group>, 'children'> {
	items: T[];
	specs?: U;
	index?: string;
	draggable?: boolean;
	childrenPosition?: 'top' | 'bottom';
	as?: keyof React.ReactHTML;
	control?: React.ElementType;
	empty?: React.ElementType;
}
