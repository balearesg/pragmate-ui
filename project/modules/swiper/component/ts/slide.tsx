import * as React from "react";

export function Slide(props): JSX.Element {
    return (
        <div className="swiper-slide">
            {props.children}
        </div>
    );
}
