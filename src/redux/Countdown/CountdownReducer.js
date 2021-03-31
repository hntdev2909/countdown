import { TIME_UP, RESET_TIME_UP } from './CountdownTypes';

const initialState = {
	timeUp: false,
};

const countdownReducer = (state = initialState, action) => {
	switch (action.type) {
		case TIME_UP:
			return {
				...state,
				timeUp: true,
			};
		case RESET_TIME_UP:
			return {
				...state,
				timeUp: false,
			};
		default:
			return {
				...state,
			};
	}
};

export default countdownReducer;
