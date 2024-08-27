import React from 'react';
import { IListItem } from '../types';
import { HTMLItem } from './html';
/**
 * Componente que renderiza un elemento de la lista.
 *
 * @template T - El tipo de los elementos en la lista.
 * @template U - Tipo de las propiedades adicionales opcionales (por defecto un objeto genérico).
 *
 * @param props - Las propiedades de `ItemList`.
 * @returns El elemento renderizado.
 */
export function ItemList<T, U = Record<string, any>>({
	index,
	item,
	idx,
	as = 'li',
	control,
	specs = {} as U,
}: IListItem<T, U>) {
	const Control = typeof control === 'string' ? HTMLItem : control;

	const elementProps = {
		key: (item as any)[index] || idx,
		index: idx,
		item,
		data: item,
		...specs,
		as: typeof control === 'string' ? control : undefined,
	};

	const element = React.createElement(Control as React.ElementType<any>, elementProps);

	return element;
}
