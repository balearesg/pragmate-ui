import React from 'react';
export function Styles() {
	// $alert-types: 'success', 'error', 'warning', 'info';
	const types = ['success', 'error', 'warning', 'info'];
	return (
		<section className="section__styles">
			<h2>Styles</h2>
			Got it. Here's the revised documentation: --- ### Customizing Alert Colors To personalize the appearance of
			the alert component in your project, define any of the following global custom properties. These properties
			should be set in the `:root` within the template module of your package. **1. Info Alert Styles** - **Text
			Color**: `--on-info` - **Icon Color**: `--info-icon-color`: Defaults to the value of `--on-info` if not set.
			- **Container Background**: `--info-container` - **Border Color**: `--info-border-color` **2. Warning Alert
			Styles** - **Text Color**: `--on-warning` - **Icon Color**: `--warning-icon-color`: Defaults to the value of
			`--on-warning` if not set. - **Container Background**: `--warning-container` - **Border Color**:
			`--warning-border-color` **3. Success Alert Styles** - **Text Color**: `--on-success` - **Icon Color**:
			`--success-icon-color`: Defaults to the value of `--on-success` if not set. - **Container Background**:
			`--success-container` - **Border Color**: `--success-border-color` **4. Error (or Danger) Alert Styles** -
			**Text Color**: `--on-error` - **Icon Color**: `--error-icon-color`: Defaults to the value of `--on-error`
			if not set. - **Container Background**: `--error-container` - **Border Color**: `--error-border-color` ---
			### Implementation Note: By setting these custom properties, you can ensure the alert component aligns with
			your desired aesthetic. While we provide a default style, it's essential to note that these colors might
			change in future versions. To ensure consistent styling, always define the custom properties that best fit
			your design needs. --- This approach gives a clear guide without referencing the current default colors
			directly.
		</section>
	);
}
