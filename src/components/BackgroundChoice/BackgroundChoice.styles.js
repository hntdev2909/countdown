import styled from 'styled-components';

const BackgroundButton = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	border: 2px solid white;
	border-radius: 5px;
	transition: all linear 0.1s;

	&::after {
		display: none;
		content: 'Change background image';
		position: absolute;
		left: calc(100% + 5px);
		bottom: 0;
		background-color: #777;
		width: max-content;
		padding: 4px 8px;
		font-size: 0.7rem;
		border-radius: 5px;
		font-weight: 600;
		color: white;
	}

	&:hover {
		transform: scale(0.95);
		cursor: pointer;

		&::after {
			display: block;
		}
	}
`;

const BackgroundContent = styled.div`
	width: 50px;
	height: 50px;
	position: absolute;
	left: 35px;
	bottom: 35px;
`;

export { BackgroundContent, BackgroundButton };
