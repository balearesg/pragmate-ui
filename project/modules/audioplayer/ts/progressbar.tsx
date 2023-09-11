import React, { useEffect, useState, useRef } from 'react';
import { useComponentAudioContext } from './context';

export function ProgressBar() {
	const ref = useRef<HTMLInputElement>(null);
	const {
		audio,
		setCurrentTime,
		data: { duration },
	} = useComponentAudioContext();
	const [value, setValue] = useState(0);

	useEffect(() => {
		const timeUpdateListener = () => {
			const currentTime = audio.currentTime;
			const percentage = (currentTime / duration) * 100;
			setValue(percentage);
		};
		audio.addEventListener('timeupdate', timeUpdateListener);

		return () => {
			audio.removeEventListener('timeupdate', timeUpdateListener);
		};
	}, [audio, duration]);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		const desiredTime = parseFloat(event.currentTarget.value);
		console.log(
			`Buffered Start: ${audio.buffered.start(0)}, Buffered End: ${audio.buffered.end(
				0
			)}, Desired Time: ${desiredTime}`
		);

		for (let i = 0; i < audio.buffered.length; i++) {
			if (audio.buffered.start(i) <= desiredTime && audio.buffered.end(i) >= desiredTime) {
				audio.currentTime = desiredTime;
				setValue(desiredTime);
				return;
			}
		}
		console.warn('Desired time not in buffered range', audio.buffered.length);
	};

	return (
		<input
			type='range'
			name='rang'
			onChange={onChange}
			title='audio duration'
			value={value}
			ref={ref}
			max={duration}
		/>
	);
}
