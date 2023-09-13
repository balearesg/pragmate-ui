import React from 'react';
import { useComponentAudioContext } from './context';

const normalizeData = filteredData => {
	const multiplier = Math.pow(Math.max(...filteredData), -1);
	return filteredData.map(n => n * multiplier);
};

const drawLineSegment = (ctx, x, y, width, isEven) => {
	ctx.lineWidth = 1; // how thick the line is
	ctx.strokeStyle = '#fff'; // what color our line is
	ctx.beginPath();
	y = isEven ? y : -y;
	ctx.moveTo(x, 0);
	ctx.lineTo(x, y);
	ctx.arc(x + width / 2, y, width / 2, Math.PI, 0, isEven);
	ctx.lineTo(x + width, 0);
	ctx.stroke();
};

const draw = (canvas, normalizedData) => {
	// Set up the canvas

	const dpr = window.devicePixelRatio || 1.5;
	const padding = 20;
	canvas.width = canvas.offsetWidth * dpr;
	canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
	console.log(130, canvas.width, canvas.height);
	const ctx = canvas.getContext('2d');
	ctx.scale(dpr, dpr);
	ctx.translate(0, canvas.offsetHeight / 2 + padding); // Set Y = 0 to be in the middle of the canvas

	// draw the line segments
	const width = canvas.offsetWidth / normalizedData.length;
	for (let i = 0; i < normalizedData.length; i++) {
		const x = width * i;
		let height = normalizedData[i] * canvas.offsetHeight - padding;
		if (height < 0) {
			height = 0;
		} else if (height > canvas.offsetHeight / 2) {
			height = canvas.offsetHeight / 2;
		}
		drawLineSegment(ctx, x, height, width, (i + 1) % 2);
	}
};
const filterData = audioBuffer => {
	const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
	const samples = 70; // Number of samples we want to have in our final data set
	const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
	const filteredData = [];
	for (let i = 0; i < samples; i++) {
		let blockStart = blockSize * i; // the location of the first sample in the block
		let sum = 0;
		for (let j = 0; j < blockSize; j++) {
			sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
		}
		filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
	}
	return filteredData;
};

const visualize = (audioBuffer, selector) => {
	return draw(selector, normalizeData(filterData(audioBuffer)));
};

export function Visualizer() {
	const { buffer } = useComponentAudioContext();
	console.log(10, buffer);
	const ref = React.useRef(null);
	React.useEffect(() => {
		visualize(buffer, ref.current);
	}, []);
	return (
		<>
			<canvas ref={ref} />
		</>
	);
}
