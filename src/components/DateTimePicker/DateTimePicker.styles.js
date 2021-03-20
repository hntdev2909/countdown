import styled from 'styled-components';

const TextDateTime = styled.p`
	font-size: ${(props) => props.fontSize};
	text-align: ${(props) => props.textAlign};
`;
const Title = styled.div`
	margin-bottom: ${(props) => props.marginBottom};
`;
const TimeChoiceInput = styled.div`
	flex: 0.3;
`;

const TimeDiv = styled.div`
	width: 100%;
	display: flex;
`;
const TimeChoice = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 0;
`;

export { TextDateTime, Title, TimeChoiceInput, TimeDiv, TimeChoice };
