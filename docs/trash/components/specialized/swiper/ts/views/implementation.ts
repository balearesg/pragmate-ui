export const implementation = `
export function SwiperImplementation(): JSX.Element {
	const items = Array.from(Array(10)).map((_, index) => (
	  <Image src="https://source.unsplash.com/random" alt=" " />
	));
	return (
	  <SwiperSlider
		loop={true}
		slidesPerView="auto"
		spaceBetween={0}
		pagination={true}
		navigation={true}
		grabCursor={true}
	  >
		{items}
	  </SwiperSlider>
	);
  }
`;
