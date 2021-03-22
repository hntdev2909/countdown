import styled from 'styled-components';

const ModalText = styled.p`
	font-size: 18px;
	margin-bottom: 0;
`;

const ModalContent = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	display: ${(props) => props.display || 'none'};
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

const ModaElement = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	padding: ${(props) => props.padding || '16px'};
	flex: ${(props) => props.flex};
	justify-content: ${(props) => props.jsContent};
`;

const ModalBox = styled.div`
	width: 600px;
	height: 400px;
	background-color: white;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
`;

const ModalImage = styled.div`
	width: 100px;
	height: 100px;
	background: url(${(props) => props.img});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	margin: 8px;
	border: ${(props) =>
		props.border ? `4px solid ${props.border}` : '2px solid #ccc'};
	transition: all linear 0.1s;
	border-radius: 5px;

	&:hover {
		transform: scale(1.05);
		box-shadow: 2px 1px 8px 0px rgb(0 0 0 / 40%);
		cursor: pointer;
	}
`;

const ModalButton = styled.span`
	display: inline-block;
	padding: 5px;
	background-color: #ccc;
	border-radius: 5px;
	font-size: 16px;

	&:hover {
		cursor: pointer;
		color: white;
	}
`;

const ModalClose = styled.span``;

export {
	ModaElement,
	ModalText,
	ModalBox,
	ModalButton,
	ModalClose,
	ModalImage,
	ModalContent,
};
