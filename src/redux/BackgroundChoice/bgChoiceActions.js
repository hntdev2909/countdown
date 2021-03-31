import {
	CHANGE_BACKGROUND,
	SELECT_BACKGROUND,
	LOAD_IMAGES,
	OPEN_MODAL,
	LOAD_LOCAL,
} from './bgChoiceTypes';

const openModal = () => {
	return {
		type: OPEN_MODAL,
	};
};

const changeBackground = () => {
	return {
		type: CHANGE_BACKGROUND,
	};
};

const selectBackground = (index) => {
	return {
		type: SELECT_BACKGROUND,
		payload: index,
	};
};

const loadImages = (images) => {
	return {
		type: LOAD_IMAGES,
		payload: images,
	};
};

const loadLocal = (image) => {
	return {
		type: LOAD_LOCAL,
		payload: image,
	};
};

export { changeBackground, openModal, selectBackground, loadImages, loadLocal };
