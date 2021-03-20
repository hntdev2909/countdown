import React from 'react';
import { BackgroundContent, BackgroundButton } from './BackgroundChoice.styles';

function BackgroundChoice({ image, callback }) {
	const handleChangeBg = () => {
		callback('flex');
	};

	return (
		<BackgroundContent>
			<BackgroundButton
				onClick={() => handleChangeBg()}
				bgImage={image}
			></BackgroundButton>
		</BackgroundContent>
	);
}

export default BackgroundChoice;
