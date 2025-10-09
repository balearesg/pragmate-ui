import * as React from 'react';
import { ModuleProvider, useModuleContext } from '../context';
import { Sidebar } from './components/sidebar';
import { MainContent } from './components/main-content';
import { navigationData } from './lib/navigation-data';

function DocumentationContent(): JSX.Element {
	const { store } = useModuleContext();

	return (
		<div className="documentation-page">
			<div className="documentation-page__container">
				<Sidebar navigationData={navigationData} />
				<MainContent>
					<div className="documentation-content">
						<div className="documentation-content__welcome">
							<h2>Welcome to Pragmate UI Documentation</h2>
							<p>
								Pragmate UI is a comprehensive design system and component library built for modern web
								applications. It provides a complete set of reusable components, patterns, and
								guidelines to help you build consistent and accessible user interfaces.
							</p>

							<div className="documentation-content__features">
								<div className="feature-card">
									<h3>🎨 Design System</h3>
									<p>Consistent design tokens, colors, typography, and spacing</p>
								</div>

								<div className="feature-card">
									<h3>🧩 Components</h3>
									<p>Reusable React components with TypeScript support</p>
								</div>

								<div className="feature-card">
									<h3>♿ Accessibility</h3>
									<p>Built with accessibility best practices and WCAG compliance</p>
								</div>

								<div className="feature-card">
									<h3>🎯 Customizable</h3>
									<p>Theming support and easy customization options</p>
								</div>
							</div>

							<div className="documentation-content__quick-links">
								<h3>Quick Links</h3>
								<div className="quick-links">
									<a href="/docs/installation" className="quick-link">
										<span className="quick-link__icon">📦</span>
										<span className="quick-link__text">Installation</span>
									</a>
									<a href="/docs/components/buttons" className="quick-link">
										<span className="quick-link__icon">🔘</span>
										<span className="quick-link__text">Buttons</span>
									</a>
									<a href="/docs/components/forms" className="quick-link">
										<span className="quick-link__icon">📝</span>
										<span className="quick-link__text">Forms</span>
									</a>
									<a href="/docs/patterns/theming" className="quick-link">
										<span className="quick-link__icon">🎨</span>
										<span className="quick-link__text">Theming</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</MainContent>
			</div>
		</div>
	);
}

export /*bundle*/
function View({ store }): JSX.Element {
	return (
		<ModuleProvider store={store}>
			<DocumentationContent />
		</ModuleProvider>
	);
}
