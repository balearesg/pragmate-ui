import * as React from 'react';
import { CopyableImplementation } from 'simply-ui/copyable-implementation';
import { Result } from './result';
import { implementation } from './implementation';
import { Code } from 'simply-ui/code';

export /*bundle*/
function View() {
	return (
		<div className="view">
			<h1 className="view__h1">Swiper</h1>
			<p className="view__p">
				El componente <span className="view__span">Swiper</span> es un reproductor de slides interactivo y
				personalizable que se utiliza para mostrar contenido en forma de diapositivas deslizables. El componente
				Swiper es especialmente útil para aplicaciones web y de escritorio que requieren presentar información
				de manera dinámica y atractiva.
			</p>
			<div className="component-info">
				<h3>Import:</h3>
				<Code>{`import { SwiperSlider } from "simply-ui/swiper-component"`}</Code>
			</div>
			<div className="component-implementation">
				<div className="component-info">
					<h3>Implementation:</h3>
					<Code>{implementation}</Code>
				</div>
				<div className="component-result">
					<h3>Result:</h3>
					<Result />
				</div>
			</div>
		</div>
	);
}
