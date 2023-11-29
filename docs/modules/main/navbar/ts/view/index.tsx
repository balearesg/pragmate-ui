import React from 'react';
import { Link } from 'pragmate-ui/components';
import { ThemeSwitcher } from 'pragmate-ui/theme-switcher';

import { ICONS } from 'pragmate-ui-docs/utils';
import { Icon } from 'pragmate-ui/icons';

export /* bundle */ function Navbar() {
	const [scrollPosition, setScrollPosition] = React.useState(0);

	const handleScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const isScrolled = scrollPosition > 20;
	return (
		<header className={`container__navbar ${isScrolled ? 'container__navbar-scrolled' : ''}`}>
			<div className='header-container'>
				<Link href='/' className='header__app-icon'>
					<Icon icon={ICONS.appLogo} />
				</Link>

				<ul className='nav'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/components/introduction'>Docs</Link>
					</li>
					<li>
						<a target='_blank' className='tag-a' href='https://github.com/balearesg/pragmate-ui'>
							Github
						</a>

						{/* <Link href="https://github.com/balearesg/pragmate-ui">Github</Link> */}
					</li>
					<li>
						<ThemeSwitcher />
					</li>
				</ul>
			</div>
		</header>
	);
}
