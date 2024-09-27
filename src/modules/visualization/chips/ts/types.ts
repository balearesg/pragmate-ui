import { IPUIProps } from 'pragmate-ui/base';

export interface IChipProps extends IPUIProps<IChipProps>{
	onClick?: () => void;
	icon?: string;
}
export interface IChipContainerProps {}
