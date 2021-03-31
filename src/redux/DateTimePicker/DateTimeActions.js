import {
	SELECT_DATE,
	LOAD_LIST_DAY,
	SELECT_TIME,
	SELECT_LIST,
	SET_DATETIME,
	RESET_DATE_TIME,
	LOAD_LOCAL_TIME,
} from './DateTimeTypes';

export const loadListDay = (listDay) => {
	return {
		type: LOAD_LIST_DAY,
		payload: listDay,
	};
};

export const resetDateTime = () => {
	return {
		type: RESET_DATE_TIME,
	};
};

export const selectDate = (date) => {
	return {
		type: SELECT_DATE,
		payload: date,
	};
};

export const selectTime = (time) => {
	return {
		type: SELECT_TIME,
		payload: time,
	};
};

export const selectList = (list) => {
	return {
		type: SELECT_LIST,
		payload: list,
	};
};

export const setDateAndTime = (dateAndTime) => {
	return {
		type: SET_DATETIME,
		payload: dateAndTime,
	};
};

export const loadLocalTime = (time) => {
	return {
		type: LOAD_LOCAL_TIME,
		payload: time,
	};
};
