import React from 'react';
import {Spinner} from 'pragmate-ui/spinner';
import {InlineCode} from 'pragmate-ui/code';

interface ITypeArrays {
	bgs: string[];
	sizes: string[];
	types: string[];
}

export function SpinnerListShow({listName}: {listName: string | 'bgs' | 'sizes' | 'types'}): JSX.Element {
	const typeArrays: ITypeArrays = {
		bgs: ['on-primary', 'on-secondary'],
		types: ['primary', 'secondary', 'tertiary'],
		sizes: ['xs', 'md', 'lg', 'xl'],
	};

	function getSize(size: string): 'xs' | 'md' | 'lg' | 'xl' {
		switch (size) {
			case 'xs':
			case 'md':
			case 'lg':
			case 'xl':
				return size;
			default:
				return 'xs';
		}
	}

	const listSizes = typeArrays.sizes.map((size: string, index) => {
		return (
			<li className="content__spinners" key={index}>
				<strong> {size}</strong>
				<Spinner type="primary" size={getSize(size)} active />
			</li>
		);
	});

	const defaultList = typeArrays[listName].map((type, index) => {
		return (
			<li className="content__spinners" key={index}>
				<strong>{type}</strong>
				<Spinner type={type} active />
			</li>
		);
	});

	const control = listName === 'sizes' ? listSizes : defaultList;
	return <ul className="content">{control}</ul>;
}
