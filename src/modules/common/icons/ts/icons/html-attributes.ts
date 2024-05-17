/**
 * A Set containing common HTML attributes that are used to control element behavior and information.
 * This Set is utilized to filter properties from objects to ensure only valid HTML attributes,
 * including accessibility attributes (those starting with 'aria-') and custom data attributes (those starting with 'data-'),
 * are included. These attributes can influence the HTML rendering and are recognized by web browsers.
 */
const htmlAttributes = new Set([
	'id',
	'class',
	'style',
	'title',
	'data',
	'value',
	'href',
	'src',
	'alt',
	'onclick',
	'onchange',
	'onmouseover',
	'disabled',
	'readonly',
	'type',
	'placeholder',
	'name',
	'method',
	'action',
	'checked',
	'selected',
	'width',
	'height',
	'maxlength',
	'minlength',
	'pattern',
	'step',
	'required',
	'autocomplete',
	'autofocus',
	'multiple',
	'form',
	'size',
	'srcset',
	'for',
	'tabindex',
	'role',
	'aria-label',
]);

/**
 * Filters the properties of an object to include only those that are recognized HTML attributes, with the
 * capability to explicitly exclude certain attributes even if they are valid. The function checks for standard
 * attributes defined in the `htmlAttributes` set, and dynamically accepts any properties that begin with 'aria-'
 * or 'data-'. It excludes any properties listed in the `exclusions` array, regardless of their validity as HTML attributes.
 *
 * @param {Record<string, any>} props - The object containing properties that may or may not correspond to valid HTML attributes.
 * @param {string[]} exclusions - Array of property names to be excluded from the returned object, even if they are valid HTML attributes.
 * @returns {Record<string, any>} A new object containing only the properties that are valid HTML attributes and not listed in exclusions.
 */
export function getAttributes(props: Record<string, any>, exclusions: string[] = []): Record<string, any> {
	const filtered = {};
	const exclusionSet = new Set(exclusions); // Convert exclusions array to a Set for efficient lookup

	for (const prop in props) {
		// Check for known attributes or attributes starting with 'aria-' or 'data-' and not in the exclusions list
		if (
			(htmlAttributes.has(prop) || prop.startsWith('aria-') || prop.startsWith('data-')) &&
			!exclusionSet.has(prop)
		) {
			filtered[prop] = props[prop];
		}
	}
	return filtered;
}
