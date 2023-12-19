import React from 'react';
import { SwiperSlider } from 'pragmate-ui/swiper';

export /*bundle*/ function Slider(props): JSX.Element {
    const { children } = props;
    const [width, setWidth] = React.useState<undefined | number>();
    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        handleResize();
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    if (!children || !Array.isArray(children) || !children.length) return null;
    const properties = { ...props };
    ['slidesPerView', 'navigation'].forEach(prop => delete properties[prop])
    if (width > 580) properties.navigation = true
    return (
        <SwiperSlider slidesPerView='auto'{...properties}>
            {children}
        </SwiperSlider>
    );
}
