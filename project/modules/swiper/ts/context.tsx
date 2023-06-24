import * as React from "react";

export const SwiperContext = React.createContext([] as any);
export const useSwiperContext = () => React.useContext(SwiperContext);
