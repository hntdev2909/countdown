import styled from 'styled-components';

const Text = styled.p`
	font-size: ${(props) => props.fontSize};
	text-align: ${(props) => props.textAlign};
`;

const Span = styled.span`
	font-size: 1.55rem;
	display: block;
	text-align: center;
`;

const Time = styled(Text)`
	font-size: ${(props) => props.fontSize || '2rem'};
	margin-bottom: 0;
`;

const CountDownTime = styled.div`
	width: 100%;
	height: auto;
	padding: 28px;
	object-fit: fill;
	background-color: rgba(0, 0, 0, 0.4);
	margin: 0 36px;
	color: white;
	border-radius: 15px;
`;
const CountDownBox = styled.div`
	display: flex;
	// z-index: 3;
`;

export { CountDownBox, CountDownTime, Time, Span };
