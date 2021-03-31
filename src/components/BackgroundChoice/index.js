import React from 'react';
import { BackgroundContent, BackgroundButton } from './BackgroundChoice.styles';
import { openModal } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

function BackgroundChoice() {
	const dispatch = useDispatch();

	const { backgroundLink, backgroundList } = useSelector(
		(state) => state.bgChoice
	);

	const handleChangeBg = () => {
		dispatch(openModal());
	};

	return (
		<BackgroundContent>
			<BackgroundButton
				onClick={() => handleChangeBg()}
				bgImage={
					backgroundLink.img
						? backgroundLink?.img?.default
						: backgroundList[0].img.default
				}
			></BackgroundButton>
		</BackgroundContent>
	);
}

export default BackgroundChoice;
