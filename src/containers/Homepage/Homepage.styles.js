import styled from 'styled-components';

const Main = styled.div`
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

const ContainerApp = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const Copyright = styled(Text)`
	font-size: 1.3rem;
	color: white;
	margin-bottom: 0;
`;

export { Main, ContainerApp, Copyright };
