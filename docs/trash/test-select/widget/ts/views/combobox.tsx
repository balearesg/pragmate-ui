import React from 'react';
import { useComboBox, useFilter } from 'react-aria';
import { Item, useComboBoxState } from 'react-stately';

import { Button } from './button';
import { ListBox } from './list-box';
import { Popover } from './popover';

export function ComboBox(props) {
	let { contains } = useFilter({ sensitivity: 'base' });
	let state = useComboBoxState({ ...props, defaultFilter: contains });

	let buttonRef = React.useRef(null);
	let inputRef = React.useRef(null);
	let listBoxRef = React.useRef(null);
	let popoverRef = React.useRef(null);

	let { buttonProps, inputProps, listBoxProps, labelProps } = useComboBox(
		{
			...props,
			inputRef,
			buttonRef,
			listBoxRef,
			popoverRef,
		},
		state
	);

	return (
		<div style={{ display: 'inline-flex', flexDirection: 'column' }}>
			<label {...labelProps}>{props.label}</label>
			<div>
				<input
					{...inputProps}
					ref={inputRef}
					style={{
						height: 24,
						boxSizing: 'border-box',
						marginRight: 0,
						fontSize: 16,
					}}
				/>
				<Button
					{...buttonProps}
					style={{
						height: 24,
						marginLeft: 0,
					}}
				>
					<span aria-hidden="true" style={{ padding: '0 2px' }}>
						▼
					</span>
				</Button>
				{state.isOpen && (
					<Popover isOpen={state.isOpen} triggerRef={inputRef}>
						<ListBox {...listBoxProps} state={state}>
							{props.children}
						</ListBox>
					</Popover>
				)}
			</div>
		</div>
	);
}
