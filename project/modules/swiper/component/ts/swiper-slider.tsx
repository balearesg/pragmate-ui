import * as React from "react";
import { Slide } from "./slide";
import { Controller } from "./controller";
import { BeyondIcon } from '@bgroup/ui/icons';
interface props {
  children: Array<JSX.Element>;
  footer?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  next?: boolean;
  functionNext?: (e: React.SyntheticEvent) => void;
  className?: string;
  slideTo?: any;
  slidesPerView? : string | number;
  spaceBetween?: number
}

export /*bundle*/
function BeyondSwiperSlider(props: props): JSX.Element {
  const refs = {
    next: React.useRef(),
    container: React.useRef(),
    pagination: React.useRef(),
    prev: React.useRef(),
  };
  const { slideTo } = props;
  const { container, prev } = refs;
  const slides: Array<JSX.Element> = props.children.map(
    (slide: JSX.Element, index: number) => <Slide key={index}>{slide}</Slide>
  );

  const footer: boolean = props.footer === true;
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
    if (!controller.destroyed) controller.setSwiper(container.current, props, refs);
    onChange();
    return () => controller.unbind("change", onChange);
  }, []);
  React.useEffect(() => {
    if (!state.swiper || !slideTo) return;
    state.swiper.slideTo(slideTo);
  }, [slideTo]);
  const { controller } = state;
  const cls: string = props.className
    ? `${props.className} beyond-element-swiper-slider`
    : "beyond-element-swiper-slider";
  const next = () => controller?.next()
  return (
    <div className={cls}>
      <div ref={container} className="swiper-container">
        <div className="swiper-wrapper">{slides}</div>
        {props.pagination && (
          <div ref={refs?.pagination} className="swiper-pagination" />
        )}
        {footer && (
          <>
            {!controller?.swiper.isEnd && (
              <button
                className="swiper-button-prev"
                onClick={props.functionNext}
              >
                SKIP
              </button>
            )}
            <div ref={refs.pagination} className="swiper-pagination" />
            <button className="swiper-button-next " onClick={controller?.next}>
              Next
            </button>
          </>
        )}
      
         {props.navigation && (
          <>
            <div ref={prev} className="swiper-button-prev">
              <BeyondIcon icon="left" />
            </div>
            <div onClick={controller?.nextSlide} className="swiper-button-next">
              <BeyondIcon icon="right" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
