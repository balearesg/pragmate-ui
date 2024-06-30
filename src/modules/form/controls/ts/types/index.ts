import { IPUIProps } from 'pragmate-ui/base';
export interface IFormProps extends IPUIProps<HTMLInputElement> {
	disabled?: boolean;
	label?: string;
	name?: string;
	sizing?: 'small' | 'medium' | 'large'; // Validate if size or sizing
}

export interface IFormCheckableProps extends IFormProps {
	checked?: boolean;
}
