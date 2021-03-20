import styled from 'styled-components';

const LoadingContent = styled.div`
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.5)),
		url(${(props) => props.imgUrl});
	background-size: cover, cover;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	position: relative;
`;

const LoadingSpin = styled.div``;

export { LoadingContent, LoadingSpin };
