import React from 'react';
import { SwiperSlider } from 'pragmate-ui/swiper';
import { Image } from 'pragmate-ui/image';

export function Result(): JSX.Element {
	const items: JSX.Element[] = Array.from(Array(10)).map((_, index): JSX.Element => {
		return <Image key={index.toString()} src={`https://source.unsplash.com/random/?city,night`} alt=' ' />;
	});

	return (
		<SwiperSlider
			//  loop={true}
			slidesPerView='auto'
			spaceBetween={20}
			pagination={true}
			navigation={true}
			className='swiper-implementation'
		>
			{items}
		</SwiperSlider>
	);
}
