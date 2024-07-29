import { SwiperOptions } from './options';

export interface ISwiperOptions extends SwiperOptions {
	slideTo?: number;
	footer?: any;
	header?: any;
	children?: any;
	pagination?: any;
	navigation?: any;
	className?: string;
}
