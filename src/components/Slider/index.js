import React from 'react';
import { SliderContent, SliderText } from './Slider.styles';
import { useSelector } from 'react-redux';

function Slider() {
	const sliderText = useSelector((state) => state.dateTime.listPicked.content);

	return (
		<SliderContent>
			<SliderText>
				{sliderText ? sliderText : 'Welcome to Countdown App'}
			</SliderText>
		</SliderContent>
	);
}

export default Slider;
