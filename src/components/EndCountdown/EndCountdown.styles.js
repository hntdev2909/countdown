import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(1.4);
    }

    50% {
        transform: scale(1.2);
    }

    75% {
        transform: scale(1.4);
    }

    100% {
        transform: scale(1);
    }
`;

const EndCdContent = styled.div`
	width: 100%;
	height: auto;
	box-sizing: border-box;
	background-color: rgba(0, 0, 0, 0.2);
	text-align: center;
	position: relative;
`;

const EndCdBox = styled.h1`
	width: 100%;
	max-height: 160px;
	overflow: visible;
	margin-bottom: 0;
	font-size: 100px;
	text-transform: uppercase;
	color: white;
	text-shadow: 2px 0 0 rgba(0, 0, 0, 0.5);
	text-align: center;
	animation: ${zoomIn} 2s linear infinite;
	transition: all 2s linear;
`;

const ResetBtn = styled.span`
	position: absolute;
	top: calc(100% + 30px);
	font-size: 20px;
	display: inline-block;
`;

export { EndCdContent, EndCdBox, ResetBtn };
