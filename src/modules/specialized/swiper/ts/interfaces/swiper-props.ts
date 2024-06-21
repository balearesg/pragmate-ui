//import { SwiperOptions } from 'swiper/types';

export interface ISwiperOptions {
	slideTo?: number;
	footer?: boolean;
	className?: string;
	next?: boolean;
	pagination?: boolean;
	slidesPerView: string | number;
	spaceBetween?: number;
	navigation: boolean;
	children?: JSX.Element[];
}
