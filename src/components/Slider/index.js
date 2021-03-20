import React from 'react';
import { SliderContent, SliderText } from './Slider.styles';

function Slider({ sliderText }) {
	return (
		<SliderContent>
			<SliderText>
				{sliderText ? sliderText : 'Welcome to Countdown App'}
			</SliderText>
		</SliderContent>
	);
}

export default Slider;
