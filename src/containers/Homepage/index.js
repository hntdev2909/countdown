import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '../../globalStyled';
import { Main, ContainerApp, Copyright } from './Homepage.styles';
import {
	Countdown,
	DateTimePicker,
	Slider,
	BackgroundChoice,
	Modal,
} from '../../components';

import { Images } from '../../themes';

function Homepage() {
	const [selectedDay, setSelectedDay] = useState(null);
	const [isEndTime, setIsEndTime] = useState(false);
	const [slidePicked, setSlidePicked] = useState('');
	const [isOpenModal, setIsOpenModal] = useState('');
	const [background, setBackground] = useState('');

	const dateTimePickerCallback = (dataPicked) => {
		const timePicked = dataPicked.time;
		const namePicked = dataPicked.name;
		if (!timePicked.includes('+')) {
			setSelectedDay(timePicked);
		}

		if (namePicked) {
			setSlidePicked(namePicked);
		}
	};

	const countdownCallback = (mode) => {
		setIsEndTime(mode);
	};

	const changeBackgroundCallback = (type) => {
		setIsOpenModal(type);
	};

	const selectedBackground = (img) => {
		setBackground(img);
	};
	useEffect(() => {}, [background]);
	return (
		<ContainerApp>
			<GlobalStyle />
			<Main imgUrl={background ? background : Images[0].img.default}>
				<Modal
					images={Images}
					openModal={isOpenModal}
					callbackType={changeBackgroundCallback}
					callbackImg={selectedBackground}
				></Modal>
				<Slider sliderText={slidePicked} />
				<DateTimePicker callback={dateTimePickerCallback} />
				<Countdown selectedDay={selectedDay} callback={countdownCallback} />
				<Copyright>Copyright by Thinh </Copyright>
				<BackgroundChoice
					image={Images[0].img.default}
					callback={changeBackgroundCallback}
				/>
			</Main>
		</ContainerApp>
	);
}

export default Homepage;
