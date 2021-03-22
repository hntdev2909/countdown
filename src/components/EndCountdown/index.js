import React from 'react';
import { EndCdContent, EndCdBox, ResetBtn } from './EndCountdown.styles';
import { Button } from 'antd';

function EndCountdown({ callback }) {
	const handleReset = () => {
		callback(true);
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
