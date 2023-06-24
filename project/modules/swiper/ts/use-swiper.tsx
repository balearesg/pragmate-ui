import * as React from "react";
import { Controller } from "./controller";
import { useSwiperContext } from "./context";

export const useSwiperSlider = (props) => {
  /* const { props } = useSwiperContext(); */

  const refs = {
    next: React.useRef(),
    container: React.useRef(),
    pagination: React.useRef(),
    prev: React.useRef(),
  };

  const { slideTo } = props;
  const { container, prev } = refs;

  const [state, setState] = React.useState<any>({});

  React.useEffect((): any => {
    const controller: any = new Controller();
    const onChange: () => void = (): void =>
      setState({
        ...state,
        ready: true,
        swiper: controller.swiper,
        controller,
        lastIndex: controller.lastIndex,
      });
    controller.bind("change", onChange);
    if (!controller.destroyed)
      controller.setSwiper(container.current, props, refs);
    onChange();
    return () => controller.unbind("change", onChange);
  }, []);

  React.useEffect(() => {
    if (!state.swiper || !slideTo) return;
    state.swiper.slideTo(slideTo);
  }, [slideTo]);

  return { refs, state, prev, container };
};
