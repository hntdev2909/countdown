import styled from 'styled-components';

const Main = styled.div`
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.5)),
		url(${(props) => props.imgUrl});
	background-size: cover, cover;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	position: relative;
`;

const ContainerApp = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const Copyright = styled.p`
	font-size: 1.3rem;
	color: white;
	margin-bottom: 0;
`;

export { Main, ContainerApp, Copyright };
