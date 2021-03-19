import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
	from { 
		margin-left: 100%;
		width: 300%; 
	}
  	to {
		margin-left: -100%;
		width: 300%;
	} 
`;

export const SlideText = styled.h1`
	width: 100%;
	font-size: 6.7rem;
	animation: ${slideIn} 10s linear infinite;
`;

export const SlideDiv = styled.div`
	position: absolute;
	z-index: 0;
	width: 100%;
	height: 100%;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TimeChoiceItem = styled.option``;
export const TimeChoiceList = styled.select`
	font-size: 1.1rem;
	flex: 0.8;
`;

export const BlurLayout = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	top: 0;
	display: ${(props) => (props.display ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
`;
