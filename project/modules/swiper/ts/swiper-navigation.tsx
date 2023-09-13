import * as React from "react";
import { Icon } from "pragmate-ui/icons";
export function SwiperNavigation(props) {
  const { navigation, controller, prev } = props;
  if (!navigation) return null;
  return (
    <>
      <div ref={prev} className="swiper-button-prev">
        <Icon icon="left" />
      </div>
      <div onClick={controller?.nextSlide} className="swiper-button-next">
        <Icon icon="right" />
      </div>
    </>
  );
}
