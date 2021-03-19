import React, { useState } from 'react';
import { GlobalStyle } from '../../globalStyled';
import { Main, ContainerApp, Copyright } from './Homepage.styles';
import { Countdown, DateTimePicker } from '../../components';

function Homepage() {
	const [selectedDay, setSelectedDay] = useState(null);
	const [isEndTime, setIsEndTime] = useState(false);

	const dateTimePickerCallback = (selectedDate) => {
		console.log(selectedDate);
		setSelectedDay(selectedDate);
	};

	const countdownCallback = (mode) => {
		setIsEndTime(mode);
	};
	return (
		<ContainerApp>
			<GlobalStyle />
			<Main imgUrl="https://images.unsplash.com/photo-1538435740860-67bd8f4e8eb8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80">
				<DateTimePicker callback={dateTimePickerCallback} />
				<Countdown selectedDay={selectedDay} />
				{/* <Copyright>Copyright by Thinh </Copyright> */}
			</Main>
		</ContainerApp>
	);
}

export default Homepage;
