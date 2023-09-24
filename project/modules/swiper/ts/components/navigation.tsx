import * as React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { useSwiperContext } from '../context';
export function SwiperNavigation() {
	const {
		controller,
		navigation,
		refs: { prev, next },
	} = useSwiperContext();
	if (!navigation) return null;
	return (
		<>
			<div ref={prev} className='swiper-button-prev'>
				<Icon icon='left' />
			</div>
			<div ref={next} onClick={controller?.nextSlide} className='swiper-button-next'>
				<Icon icon='right' />
			</div>
		</>
	);
}
