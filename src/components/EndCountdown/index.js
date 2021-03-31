import React from 'react';
import { EndCdContent, EndCdBox, ResetBtn } from './EndCountdown.styles';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { resetTimeUp, resetDateTime } from '../../redux';

function EndCountdown({ callback }) {
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(resetTimeUp());
		dispatch(resetDateTime());
	};

	return (
		<EndCdContent>
			<EndCdBox>Time up!</EndCdBox>
			<ResetBtn>
				<Button type="primary" danger size="large" onClick={handleReset}>
					Reset
				</Button>
			</ResetBtn>
		</EndCdContent>
	);
}

export default EndCountdown;
