import * as React from 'react';
import { AudioPlayer } from 'pragmate-ui/audio-player';

export /*bundle*/
function View() {
	return (
		<>
			<h2>AudioPlayer</h2>
			<AudioPlayer src='http://localhost:2000/recordings/Webscrapping.mp3' />
		</>
	);
}
