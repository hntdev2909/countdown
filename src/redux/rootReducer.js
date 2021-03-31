import bgChoiceReducer from './BackgroundChoice/bgChoiceReducer';
import dateTimeReducer from './DateTimePicker/DateTimeReducer';
import countdownReducer from './Countdown/CountdownReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	bgChoice: bgChoiceReducer,
	dateTime: dateTimeReducer,
	countdown: countdownReducer,
});

export default rootReducer;
