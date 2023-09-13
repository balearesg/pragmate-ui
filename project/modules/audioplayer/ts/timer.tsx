import React from 'react';
import { useTimer } from './hooks/use-timer';
import { useComponentAudioContext } from './context';
type TTime = number | string;
export function Timer() {
	const {
		data: { duration: time },
		audio,
	} = useComponentAudioContext();

	const [timeToShow, setTimeToShow] = React.useState(time);

	React.useEffect(() => {
		audio.addEventListener('play', () => {
			setTimeToShow(audio.currentTime);
		});
		audio.addEventListener('pause', () => {
			setTimeToShow(time);
		});
		audio.addEventListener('stop', () => {
			setTimeToShow(time);
		});
		audio.addEventListener('timeupdate', () => {
			setTimeToShow(audio.currentTime);
		});
	}, []);
	let hours: TTime = Math.floor(timeToShow / 3600);
	let minutes: TTime = Math.floor((timeToShow % 3600) / 60);
	let seconds: TTime = Math.round(timeToShow % 60);

	const output = [];
	if (hours > 0) {
		output.push(
			<span key='hours' className='timer__numbers timer__numbers--hours'>
				{hours}
			</span>
		);
	}
	if (minutes < 10) minutes = '0' + minutes;
	output.push(
		<React.Fragment key='minutes'>
			<span className='timer__numbers timer__number--minutes'>{minutes ?? '00'}</span>
			<span className='timer__separator'>:</span>
		</React.Fragment>
	);
	if (seconds < 10) seconds = '0' + seconds;
	output.push(
		<span key='seconds' className='timer__numbers timer__number--seconds'>
			{seconds ?? '00'}
		</span>
	);
	return <section className='timer__container'>{output}</section>;
}
