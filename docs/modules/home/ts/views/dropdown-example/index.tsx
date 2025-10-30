import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'pragmate-ui/dropdown';
import { Button } from 'pragmate-ui/components';

/**
 * Dropdown Example
 *
 * This example demonstrates how to use the pragmate-ui/dropdown module.
 *
 * Key Components (all imported with \/*bundle*\/ comment):
 * - Dropdown: Main wrapper that provides context
 * - DropdownToggle: Button/trigger to open/close the menu
 * - DropdownMenu: Container for menu items
 * - DropdownItem: Individual menu item
 * - useDropdownContext: Hook to access dropdown state
 *
 * Structure:
 * <Dropdown>
 *   <DropdownToggle>Trigger</DropdownToggle>
 *   <DropdownMenu>
 *     <DropdownItem>Item</DropdownItem>
 *   </DropdownMenu>
 * </Dropdown>
 */

export function DropdownExample(): JSX.Element {
	const [selectedOption, setSelectedOption] = React.useState<string>('None');
	const [actionLog, setActionLog] = React.useState<string[]>([]);

	const handleSelect = (option: string) => {
		setSelectedOption(option);
		const timestamp = new Date().toLocaleTimeString();
		setActionLog(prev => [...prev, `${timestamp}: Selected "${option}"`]);
	};

	const clearLog = () => {
		setActionLog([]);
	};

	return (
		<div className="dropdown-example">
			<h1>Dropdown Component Example</h1>
			<p>This example demonstrates how to use the dropdown module from pragmate-ui.</p>

			<div className="examples-grid">
				<section className="example-section">
					<h2>Basic Dropdown</h2>
					<p>Simple dropdown with text items</p>
					<Dropdown className="dropdown-basic">
						<DropdownToggle>
							<Button variant="primary">Select an Option</Button>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem href="#" onClick={() => handleSelect('Option 1')}>
								Option 1
							</DropdownItem>
							<DropdownItem href="#" onClick={() => handleSelect('Option 2')}>
								Option 2
							</DropdownItem>
							<DropdownItem href="#" onClick={() => handleSelect('Option 3')}>
								Option 3
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</section>

				<section className="example-section">
					<h2>Dropdown with Icons</h2>
					<p>Dropdown with custom content</p>
					<Dropdown className="dropdown-icons">
						<DropdownToggle>
							<Button variant="secondary">Actions Menu</Button>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem href="#" onClick={() => handleSelect('Edit')}>
								✏️ Edit
							</DropdownItem>
							<DropdownItem href="#" onClick={() => handleSelect('Delete')}>
								🗑️ Delete
							</DropdownItem>
							<DropdownItem href="#" onClick={() => handleSelect('Share')}>
								🔗 Share
							</DropdownItem>
							<DropdownItem href="#" onClick={() => handleSelect('Download')}>
								⬇️ Download
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</section>

				<section className="example-section">
					<h2>User Menu Dropdown</h2>
					<p>Typical user menu with different actions</p>
					<Dropdown className="dropdown-user">
						<DropdownToggle>
							<Button variant="outline">👤 User Menu</Button>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem href="#" onClick={() => handleSelect('Profile')}>
								Profile
							</DropdownItem>
							<DropdownItem href="#" onClick={() => handleSelect('Settings')}>
								Settings
							</DropdownItem>
							<DropdownItem href="#" onClick={() => handleSelect('Help')}>
								Help & Support
							</DropdownItem>
							<DropdownItem href="#" onClick={() => handleSelect('Logout')}>
								Logout
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</section>
			</div>

			<div className="output-section">
				<div className="output-header">
					<h3>Selected: {selectedOption}</h3>
					<Button variant="link" onClick={clearLog}>
						Clear Log
					</Button>
				</div>

				<div className="action-log">
					<h4>Action Log:</h4>
					{actionLog.length === 0 ? (
						<p className="empty-log">No actions yet. Select an option from any dropdown above.</p>
					) : (
						<ul>
							{actionLog.map((log, index) => (
								<li key={index}>{log}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}
