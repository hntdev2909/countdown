import moment from 'moment';
import {
	SELECT_DATE,
	LOAD_LIST_DAY,
	SELECT_TIME,
	SELECT_LIST,
	SET_DATETIME,
	RESET_DATE_TIME,
	LOAD_LOCAL_TIME,
} from './DateTimeTypes';

const initialState = {
	time: '',
	date: '',
	dateAndTime: '',
	listPicked: {
		time: '',
		content: '',
	},
	listDay: [],
};

const dateTimePickerReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_LIST_DAY:
			const tmpListDay = [];
			action.payload.forEach((item) => {
				const difference =
					+new Date(`2021-${item.time} 00:00:00`) - +new Date();
				if (difference < 0) {
					tmpListDay.push({
						time: `2022-${item.time} 00:00:00`,
						content: item.content,
					});
				} else {
					tmpListDay.push({
						time: `2021-${item.time} 00:00:00`,
						content: item.content,
					});
				}
				return tmpListDay;
			});
			return {
				...state,
				listDay: tmpListDay,
			};

		case SELECT_DATE:
			return {
				...state,
				listPicked: {},
				date: action.payload,
			};

		case SET_DATETIME:
			let localStorageData = JSON.parse(localStorage.getItem('count-down'));
			let tmpTimeCalendar;
			if (moment(action.payload) > moment().add(60, 'seconds')) {
				tmpTimeCalendar = action.payload;
			} else {
				tmpTimeCalendar = '';
			}

			localStorage.setItem(
				'count-down',
				JSON.stringify({
					dateAndTime: tmpTimeCalendar,
					listPicked: '',
					backgroundLink: localStorageData.backgroundLink,
				})
			);
			return {
				...state,
				dateAndTime: action.payload,
			};

		case SELECT_TIME:
			console.log(action);
			return {
				...state,
				listPicked: {},
				time: action.payload,
			};

		case RESET_DATE_TIME:
			return {
				...state,
				time: '',
				date: '',
				dateAndTime: '',
				listPicked: {
					time: '',
					content: '',
				},
			};

		case SELECT_LIST:
			let localStData = JSON.parse(localStorage.getItem('count-down'));
			const tmpDatePicked = action.payload.split('+');
			localStorage.setItem(
				'count-down',
				JSON.stringify({
					listPicked: {
						time: tmpDatePicked[0],
						content: tmpDatePicked[1],
					},
					dateAndTime: '',
					backgroundLink: localStData.backgroundLink,
				})
			);
			return {
				...state,
				time: '',
				date: '',
				dateAndTime: '',
				listPicked: {
					time: tmpDatePicked[0],
					content: tmpDatePicked[1],
				},
			};

		case LOAD_LOCAL_TIME:
			if (action.payload.typeOfTime === 'listPicked') {
				console.log(action.payload);
				return {
					...state,
					listPicked: action.payload.time,
				};
			}
			return {
				...state,
				dateAndTime: action.payload.time,
			};
		default:
			return state;
	}
};

export default dateTimePickerReducer;
