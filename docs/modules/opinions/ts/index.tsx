import * as React from 'react';
import { SwiperSlider } from 'pragmate-ui/swiper-component';
import { CardOpinion } from './card';

interface IOpinion {
	name: string;
	src: string;
	profession?: string;
	comment: string;
	alt?: string;
}

interface IProps {
	opinions: IOpinion[];
}

export /* bundle */ function Opinions(props: IProps) {
	const items = props.opinions.map((opinion, index) => {
		return (
			<CardOpinion
				key={index}
				name={opinion.name}
				src={opinion.src}
				comment={opinion.comment}
				profession={opinion.profession}
				alt={opinion.alt}
			/>
		);
	});

	return (
		<section className="container__opinion">
			<SwiperSlider
				slidesPerView="auto"
				spaceBetween={0}
				pagination={true}
				navigation={true}
				className="swiper-implementation"
			>
				{items}
			</SwiperSlider>
		</section>
	);
}
