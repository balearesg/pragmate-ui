/**
 * Converts an object into a string representation with attributes in the format "attribute="value" attr2="value2".
 * @param obj - The object to convert.
 * @returns The string representation of the object's attributes.
 */
export function objectToString(obj: any): string {
	const attributes: string[] = [];
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = obj[key];
			attributes.push(`${key}="${value}"`);
		}
	}
	return attributes.join(' ');
}
