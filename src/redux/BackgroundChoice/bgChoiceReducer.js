import {
	CHANGE_BACKGROUND,
	SELECT_BACKGROUND,
	LOAD_IMAGES,
	OPEN_MODAL,
	LOAD_LOCAL,
} from './bgChoiceTypes';

const initialState = {
	backgroundLink: {},
	backgroundList: [],
	isOpenModal: false,
};

const changeBackgroundReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				isOpenModal: !state.isOpenModal,
			};

		case LOAD_LOCAL:
			return {
				...state,
				backgroundLink: action.payload,
			};

		case CHANGE_BACKGROUND:
			const tmpData = { ...state };
			let tmpBgLink = tmpData.backgroundList.filter(
				(item) => item.selected === true
			);
			localStorage.setItem(
				'count-down',
				JSON.stringify({ backgroundLink: tmpBgLink[0] })
			);
			return {
				...state,
				backgroundLink: tmpBgLink[0],
			};

		case LOAD_IMAGES:
			return {
				...state,
				backgroundList: action.payload,
			};

		case SELECT_BACKGROUND:
			const tmpListImg = { ...state };
			tmpListImg.backgroundList.map((image) => (image.selected = false));
			tmpListImg.backgroundList[action.payload].selected = true;
			return {
				...tmpListImg,
			};

		default:
			return state;
	}
};

export default changeBackgroundReducer;
