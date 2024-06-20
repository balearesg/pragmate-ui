import React from 'react';
import {useSwiperContext} from '../context';
export function Pagination() {
	const {pagination, refs} = useSwiperContext();
	if (!pagination) return null;

	return <div ref={refs.pagination} className="swiper-pagination" />;
}
