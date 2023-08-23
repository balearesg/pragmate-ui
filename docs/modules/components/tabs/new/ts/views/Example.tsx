import * as React from 'react';
import * as moduleComponent from 'pragmate-ui/newtabs';
import { toast } from 'pragmate-ui/toast';

console.log(0.2, moduleComponent, toast);
const { Tabs, Tab, TabsContainer, Panes } = moduleComponent;

export function Example() {
	const onChange = (event, index) => {
		toast.info(`Tab ${index + 1} selected`);
	};

	return (
		<TabsContainer onChange={onChange} active={0}>
			<Tabs>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
				<Tab>Tab 3</Tab>
			</Tabs>
			<Panes>
				<div>Content 1</div>
				<div>Content 2</div>
				<div>Content 3</div>
			</Panes>
		</TabsContainer>
	);
}
