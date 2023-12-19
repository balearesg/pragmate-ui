import React from 'react';
import { Slider } from 'pragmate-ui/slider';
import { GENERAL_ICONS } from "pragmate-ui/icons";
import { Item } from './item';
import { ItemButton } from './item-button';
export function Result(): JSX.Element {
	const entries = Object.keys(GENERAL_ICONS)
	const items: JSX.Element[] = entries.map((key, index): JSX.Element => {
		const item = {
			label: key,
			icon: key
		}
		return <Item item={item} key={key} />;
	});
	const itemsButtons: JSX.Element[] = entries.map((key, index): JSX.Element => {
		const item = {
			label: key,
			variant: "secondary"
		}
		return <ItemButton item={item} key={key} />;
	});
	return (
		<>
			<Slider
				lazy={true}
				grabCursor={true}
				className="slider-icon"
			>
				{items}
			</Slider>
			<div className='separator' />
			<Slider
				lazy={true}
				grabCursor={true}
				className="slider-buttons"
			>
				{itemsButtons}
			</Slider>
		</>

	);
}
