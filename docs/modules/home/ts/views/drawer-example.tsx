import * as React from 'react';
import { Drawer, CloseButton } from 'pragmate-ui/drawer';
import { Button } from 'pragmate-ui/components';

export function DrawerExample(): JSX.Element {
	const [openLeft, setOpenLeft] = React.useState(false);
	const [openRight, setOpenRight] = React.useState(false);
	const [openTop, setOpenTop] = React.useState(false);
	const [openBottom, setOpenBottom] = React.useState(false);

	return (
		<div className="drawer-example">
			<header>
				<h2>Drawer Component Examples</h2>
				<p>Click the buttons to open drawers from different positions</p>
			</header>

			<div className="drawer-controls">
				<Button variant="primary" onClick={() => setOpenLeft(true)}>
					Open Left Drawer
				</Button>
				<Button variant="primary" onClick={() => setOpenRight(true)}>
					Open Right Drawer
				</Button>
				<Button variant="primary" onClick={() => setOpenTop(true)}>
					Open Top Drawer
				</Button>
				<Button variant="primary" onClick={() => setOpenBottom(true)}>
					Open Bottom Drawer
				</Button>
			</div>

			<Drawer className="custom-drawer" position="left" open={openLeft} onClose={() => setOpenLeft(false)}>
				<CloseButton />
				<h3>Left Drawer</h3>
				<p>This drawer opens from the left side of the screen.</p>
				<p>It can contain any content you need.</p>
			</Drawer>

			<Drawer className="custom-drawer" position="right" open={openRight} onClose={() => setOpenRight(false)}>
				<CloseButton />
				<h3>Right Drawer</h3>
				<p>This drawer opens from the right side of the screen.</p>
				<p>Perfect for navigation menus or side panels.</p>
			</Drawer>

			<Drawer className="custom-drawer" position="top" open={openTop} onClose={() => setOpenTop(false)}>
				<CloseButton />
				<h3>Top Drawer</h3>
				<p>This drawer opens from the top of the screen.</p>
				<p>Great for notifications or announcements.</p>
			</Drawer>

			<Drawer className="custom-drawer" position="bottom" open={openBottom} onClose={() => setOpenBottom(false)}>
				<CloseButton />
				<h3>Bottom Drawer</h3>
				<p>This drawer opens from the bottom of the screen.</p>
				<p>Useful for mobile-style bottom sheets.</p>
			</Drawer>
		</div>
	);
}
