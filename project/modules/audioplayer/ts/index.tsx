import React from 'react';
import { useAudio } from './hooks/use-audio';
import { IconButton } from 'pragmate-ui/icons';
import { ComponentAudioContext } from './context';
import { ProgressBar } from './progressbar';
import { Timer } from './timer';
import { Visualizer } from './visualizer';

export /*bundle*/ function AudioPlayer({ src }) {
	const { ready, audioRef, audio, data, buffer } = useAudio(src);
	const [playing, setPlaying] = React.useState(false);
	const [currentTime, setCurrentTime] = React.useState(0);

	if (!ready) return 'cargando';
	const actions = {
		play: event => {
			event.stopPropagation();
			audio.play();
			setPlaying(true);
		},
		pause: event => {
			event.stopPropagation();
			audio.pause();
			setPlaying(false);
		},
		restart: event => {
			event.stopPropagation();
		},
	};

	const onClick = event => {
		const action = event.currentTarget.dataset.action;

		actions[action](event);
	};
	const action = playing ? 'pause' : 'play';
	const value = {
		audio,
		data,
		playing,
		buffer,
		currentTime,
		setCurrentTime,
	};
	return (
		<ComponentAudioContext.Provider value={value}>
			<div className='player__container'>
				<IconButton icon={action} data-action={action} onClick={onClick} />
				<div className='audio__container'>
					<ProgressBar />
					<Visualizer />
				</div>

				<Timer />
			</div>
		</ComponentAudioContext.Provider>
	);
}
