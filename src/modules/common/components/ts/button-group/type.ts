import { IPUIProps } from 'pragmate-ui/base';

export interface IButtonGroupProps extends Omit<IPUIProps<IButtonGroupProps>, 'size'>{
	size?: 'small' | 'medium' | 'tall';
	orientation?: 'row' | 'column';
	selected?: number;
	disabled?: boolean;
	index?: number;
	sizing?: string;
}
