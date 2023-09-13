import { useContext, createContext } from 'react';
import { IAudioInterface } from './types/IAudioInterface';

interface IAudioContext {
	audio?: HTMLAudioElement;
	data?: IAudioInterface;
	buffer?: AudioBuffer;
	playing: boolean;
}
export const ComponentAudioContext = createContext({} as IAudioContext);
export const useComponentAudioContext = () => useContext(ComponentAudioContext);
