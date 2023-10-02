import * as React from 'react';
import { Image } from 'pragmate-ui/image';
export function CardOpinion(props) {
	const { name, src, profession, comment, alt } = props;

	return (
		<div className="container__card-opinions">
			<Image src="image/comillas.png" alt="icon" />
			<div className="img__icon-circle">
				<Image src={src} alt={alt} className="img__icon-circle" />
			</div>
			<div className="content-p">
				<p className="opinions__p">{comment}</p>
			</div>

			<div className="content-opinions">
				<h3>
					<strong>{name}</strong>
				</h3>
				<span>{profession}</span>
			</div>
		</div>
	);
}
