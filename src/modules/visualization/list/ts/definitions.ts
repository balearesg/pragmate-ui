import { ReactHTML } from 'react';
import { IPUIProps } from 'pragmate-ui/base';
/**
 * Interfaz para las propiedades del componente `ItemList`.
 *
 * @template T - El tipo de los elementos en la lista.
 * @template U - Tipo de las propiedades adicionales opcionales (por defecto un objeto genérico).
 */
export interface IItemListProps<T, U = Record<string, any>> extends IPUIProps {
	/** Clave del índice para el elemento en la lista. */
	index: string;

	/** Elemento individual de la lista. */
	item: T;

	/** Índice del elemento en la lista. */
	idx: number;

	/** Tipo del contenedor HTML para el elemento (por defecto 'li'). */
	as?: keyof React.ReactHTML;

	/** Componente o etiqueta HTML que renderiza el elemento. */
	control?:
		| string
		| React.ElementType<
				{
					item: T;
					index: number;
					data: T;
					children?: React.ReactNode;
				} & U
		  >;

	/** Propiedades adicionales opcionales. */
	specs?: U;
}
