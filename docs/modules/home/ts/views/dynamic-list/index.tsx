import React from 'react';
import * as Dynamic from 'pragmate-ui/dynamic-list';
import { Button } from 'pragmate-ui/components';
import { Input } from 'pragmate-ui/form';

/**
 * Dynamic List Example
 *
 * This example demonstrates how to use the pragmate-ui/dynamic-list module.
 *
 * Key Components (all imported with \/*bundle\*\/ comment):
 * - Dynamic.Provider: Main wrapper that manages state and context
 * - Dynamic.List: Renders the list of items
 * - Dynamic.Header: Optional header with built-in add button
 * - Dynamic.useDynamicListContext: Hook to access context (addItem, removeItem, etc.)
 *
 * Required Props for Provider:
 * - name: string - Name identifier for the list
 * - value: array - Array of items to display
 * - onChange: function - Callback when items change
 * - Item: Component - Custom component to render each item
 *
 * Optional Props:
 * - draggable: boolean - Enable drag and drop
 * - specs: object - Additional specifications
 */

// Define a custom Item component to render each list item
function TaskItem({ value, setValue }) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue({ ...value, task: e.target.value });
	};

	return (
		<div className="task-item">
			<Input type="text" value={value.task || ''} onChange={handleChange} placeholder="Enter task description" />
		</div>
	);
}

// Custom actions using the useDynamicListContext hook
function CustomActions() {
	const { addItem } = Dynamic.useDynamicListContext();

	return (
		<section className="dynamic-actions">
			<Button variant="primary" onClick={addItem}>
				Add New Task
			</Button>
		</section>
	);
}

export function DynamicListExample(): JSX.Element {
	const [tasks, setTasks] = React.useState([{ task: 'Learn BeyondJS' }, { task: 'Build amazing UI' }]);

	const handleChange = ({ currentTarget }) => {
		console.log('Tasks updated:', currentTarget.value);
		setTasks(currentTarget.value);
	};

	return (
		<div className="dynamic-list-example">
			<h1>Dynamic List Example</h1>
			<p>This example demonstrates how to use the dynamic-list module from pragmate-ui.</p>

			<Dynamic.Provider name="tasks" value={tasks} onChange={handleChange} Item={TaskItem} draggable={false}>
				<Dynamic.Header>
					<h3>Task List</h3>
				</Dynamic.Header>

				<Dynamic.List className="tasks-list" />

				<CustomActions />
			</Dynamic.Provider>

			<div className="output">
				<h3>Current Tasks:</h3>
				<pre>{JSON.stringify(tasks, null, 2)}</pre>
			</div>
		</div>
	);
}
