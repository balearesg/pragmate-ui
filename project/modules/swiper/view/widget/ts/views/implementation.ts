export const implementation = `
export function SwiperImplementation(): JSX.Element {
	const items = Array.from(Array(10)).map((_, index) => (
	  <BeyondImage src="https://source.unsplash.com/random" alt=" " />
	));
	return (
	  <BeyondSwiperSlider
		loop={true}
		slidesPerView="auto"
		spaceBetween={0}
		pagination={true}
		navigation={true}
		grabCursor={true}
	  >
		{items}
	  </BeyondSwiperSlider>
	);
  }
`  
