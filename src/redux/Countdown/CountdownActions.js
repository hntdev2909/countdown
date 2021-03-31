import { TIME_UP, RESET_TIME_UP } from './CountdownTypes';

export const timeUp = () => {
	return {
		type: TIME_UP,
	};
};

export const resetTimeUp = () => {
	return {
		type: RESET_TIME_UP,
	};
};
