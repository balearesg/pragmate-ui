import React from 'react';
import { IAudioInterface } from '../types/IAudioInterface';

type TResponse = {
	ready: boolean;
	audio: HTMLAudioElement;
	buffer: AudioBuffer;
	audioRef: React.MutableRefObject<HTMLAudioElement>;
	data: IAudioInterface;
};

export function useAudio(src): TResponse {
	const audioRef = React.useRef(null);
	const [audio, setAudio] = React.useState<TResponse['audio']>(null);
	const [buffer, setBuffer] = React.useState<AudioBuffer>();
	const [data, setData] = React.useState<IAudioInterface>({ src });

	const ref = audioRef.current;
	React.useEffect(() => {
		try {
			fetch(src).then(async response => {
				if (!response.ok) throw new Error(response.statusText);
				const data: IAudioInterface = { src };
				const audioContext = new AudioContext();
				data.blob = await response.clone().blob();
				response.arrayBuffer().then(buffer => {
					audioContext.decodeAudioData(buffer).then(audioBuffer => {
						console.log(audioBuffer);
						setBuffer(audioBuffer);
					});
				});
				data.url = URL.createObjectURL(data.blob);
				const audio = new Audio();

				audio.addEventListener('loadedmetadata', () => {
					data.duration = parseFloat(audio.duration.toFixed(2));
					data.fileName = src.split('/').pop();

					setData(data);
					setAudio(audio);
				});

				audio.addEventListener('waiting', () => {
					console.log(0.2, 'waiting', audio.currentTime);
				});
				audio.addEventListener('error', error => {
					console.error('Error al cargar el audio:', error);
				});
				audio.src = src;
				audio.load();
			});
		} catch (e) {
			console.error(e);
		}
	}, [src]);

	return {
		ready: audio && buffer,
		audioRef: ref,
		buffer,
		audio,
		data,
	};
}
