import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    0% {
        -webkit-transform: translateX(100%);  

    }
100% { 
    -webkit-transform: translateX(-100%);  
  }
`;

const SliderContent = styled.div`
	width: 100%;
	height: auto;
	box-sizing: border-box;
	background-color: rgba(0, 0, 0, 0.2);
`;

const SliderText = styled.h1`
	width: max-content;
	max-height: 160px;
	overflow: visible;
	margin-bottom: 0;
	font-size: 100px;
	position: relative;
	text-transform: uppercase;
	color: white;
	text-shadow: 2px 0 0 rgba(0, 0, 0, 0.5);
	animation: ${slideIn} 20s linear infinite;
`;

export { SliderContent, SliderText };
