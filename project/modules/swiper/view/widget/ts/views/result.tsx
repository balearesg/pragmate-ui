import React from "react";
import { BeyondSwiperSlider } from "@bgroup/ui/swiper-component";
import { BeyondImage } from "@bgroup/ui/image";

export function Result(): JSX.Element {
 
  const items : JSX.Element[] = Array.from(Array(10)).map((_, index) : JSX.Element => {
    return (
      <BeyondImage key={index.toString()} src={`https://source.unsplash.com/random/?city,night`} alt=" " />
    )
  });
  return (
    <BeyondSwiperSlider
    //  loop={true}
      slidesPerView="auto"
      spaceBetween={20}
      pagination={true}
      navigation={true}
      className="swiper-implementation"
    >
      {items}
    </BeyondSwiperSlider>

  );
}
