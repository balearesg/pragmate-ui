import { IPUIProps } from 'pragmate-ui/base';

export type IEvent = [{date: string; description: string; title: string; icon?: string}];
export interface IProps extends Omit<IPUIProps<IProps>, 'type'> {
	events: IEvent;
}