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

export const Span = styled.span`
	font-size: 1.55rem;
	display: block;
	text-align: center;
`;

export const Text = styled.p`
	font-size: ${(props) => props.fontSize};
	text-align: ${(props) => props.textAlign};
`;
export const Time = styled(Text)`
	font-size: ${(props) => props.fontSize || '2rem'};
	margin-bottom: 0;
`;
export const Copyright = styled(Text)`
	font-size: 1.3rem;
	color: white;
	margin-bottom: 0;
`;
export const Title = styled.div`
	margin-bottom: ${(props) => props.marginBottom};
`;
export const TimeChoiceInput = styled.div`
	flex: 0.3;
`;
export const TimeChoiceItem = styled.option``;
export const TimeChoiceList = styled.select`
	font-size: 1.1rem;
	flex: 0.8;
`;
export const TimeDiv = styled.div`
	width: 100%;
	display: flex;
`;
export const TimeChoice = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 3;
`;
export const CountDownTime = styled.div`
	width: 100%;
	height: auto;
	padding: 28px;
	object-fit: fill;
	background-color: rgba(0, 0, 0, 0.4);
	margin: 0 36px;
	color: white;
	border-radius: 15px;
`;
export const CountDownBox = styled.div`
	display: flex;
	z-index: 3;
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

export const Main = styled.div`
	width: 100%;
	height: 100%;
	background: url(${(props) => props.imgUrl});
	background-size: cover;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	position: relative;
`;

export const ContainerApp = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;
