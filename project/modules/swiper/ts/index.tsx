import * as React from "react";
import { Slide } from "./slide/slide";
import { Controller } from "./controller";
import { SwiperFooter } from "./swiper-footer";
import { SwiperNavigation } from "./swiper-navigation";
import { SlideItems } from "./slide";
import { useSwiperSlider } from "./use-swiper";
interface IProps {
  children: Array<JSX.Element>;
  footer?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  next?: boolean;
  functionNext?: (e: React.SyntheticEvent) => void;
  className?: string;
  slideTo?: any;
  slidesPerView?: string | number;
  spaceBetween?: number;
}

export /*bundle*/
function SwiperSlider(props: IProps): JSX.Element {
  const { refs, state, prev, container } = useSwiperSlider(props);

  const footer: boolean = props.footer === true;

  const { controller } = state;
  const cls: string = props.className
    ? `${props.className} pragmate-element-swiper-slider`
    : "pragmate-element-swiper-slider";
  const next = () => controller?.next();
  return (
    <div className={cls}>
      <div ref={container} className="swiper-container">
        <div className="swiper-wrapper">{<SlideItems props={props} />}</div>
        {props.pagination && (
          <div ref={refs?.pagination} className="swiper-pagination" />
        )}
        <SwiperFooter footer={footer} controller={controller} refs={refs} />

        <SwiperNavigation
          navigation={props.navigation}
          controller={controller}
          prev={prev}
        />
      </div>
    </div>
  );
}
