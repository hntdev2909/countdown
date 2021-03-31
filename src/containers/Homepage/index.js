import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '../../globalStyled';
import { Main, ContainerApp, Copyright } from './Homepage.styles';
import {
	Countdown,
	DateTimePicker,
	Slider,
	BackgroundChoice,
	Modal,
	Loading,
	EndCountdown,
} from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { loadLocal, loadLocalTime } from '../../redux';

function Homepage() {
	const [isLoading, setIsLoading] = useState(true);

	const dispatch = useDispatch();
	const { backgroundLink, backgroundList } = useSelector(
		(state) => state.bgChoice
	);
	const countdown = useSelector((state) => state.countdown.timeUp);

	useEffect(() => {
		const dataLocal = localStorage.getItem('count-down');
		const parseDataLocal = JSON.parse(dataLocal);
		if (dataLocal) {
			if (parseDataLocal.backgroundLink) {
				dispatch(loadLocal(parseDataLocal.backgroundLink));
			}

			if (parseDataLocal.dateAndTime) {
				dispatch(
					loadLocalTime({
						time: parseDataLocal.dateAndTime,
						typeOfTime: 'dateAndTime',
					})
				);
			}
			if (parseDataLocal.listPicked) {
				dispatch(
					loadLocalTime({
						time: parseDataLocal.listPicked,
						typeOfTime: 'listPicked',
					})
				);
			}
		}

		const timerLoading = setTimeout(() => {
			setIsLoading(!isLoading);
		}, 500);

		return () => clearTimeout(timerLoading);
	}, []);

	return (
		<ContainerApp>
			<GlobalStyle />
			{isLoading ? (
				''
			) : (
				<Main
					imgUrl={
						backgroundLink.img
							? backgroundLink?.img?.default
							: backgroundList[0].img.default
					}
				>
					<Modal></Modal>
					{countdown ? <EndCountdown /> : <Slider />}
					<DateTimePicker />
					<Countdown />
					{/* <Copyright>Copyright by Thinh </Copyright> */}
					<BackgroundChoice />
				</Main>
			)}
		</ContainerApp>
	);
}

export default Homepage;
