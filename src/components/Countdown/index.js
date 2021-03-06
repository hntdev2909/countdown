import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CountDownBox, CountDownTime, Time, Span } from './Countdown.styles';
import { timeUp } from '../../redux';

function Count() {
	const { dateAndTime, listPicked } = useSelector((state) => state.dateTime);
	const dispatch = useDispatch();
	const calculateTimeLeft = (picktime) => {
		const difference =
			+new Date(picktime || '2022-02-01 00:00:00') - +new Date();
		if (difference > 0) {
			const timeLeft = {
				days: Math.floor(difference / (1000 * 24 * 60 * 60)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / (1000 * 60)) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};

			if (
				timeLeft.days === 0 &&
				timeLeft.hours === 0 &&
				timeLeft.minutes === 0 &&
				timeLeft.seconds === 0
			) {
				dispatch(timeUp());
				setOverTime(true);
			}
			return timeLeft;
		} else {
			const timeLeft = {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
			return timeLeft;
		}
	};

	const [time, setTime] = useState(calculateTimeLeft());
	const [overTime, setOverTime] = useState(false);

	useEffect(() => {
		if (dateAndTime || listPicked) {
			setOverTime(false);
		}
		let tmpTime;
		if (dateAndTime) {
			tmpTime = dateAndTime;
		} else {
			tmpTime = listPicked.time;
		}

		const timer = setInterval(() => {
			setTime(calculateTimeLeft(tmpTime));
		}, 1000);

		if (overTime) {
			clearInterval(timer);
		}

		return () => clearInterval(timer);
	}, [dateAndTime, listPicked]);

	return (
		<CountDownBox>
			<CountDownTime>
				<Time fontSize="6rem">
					{time.days < 10 ? '0' + time.days : time.days}
				</Time>
				<Span>Days</Span>
			</CountDownTime>
			<CountDownTime>
				<Time fontSize="6rem">
					{time.hours < 10 ? '0' + time.hours : time.hours}
				</Time>
				<Span>Hours</Span>
			</CountDownTime>
			<CountDownTime>
				<Time fontSize="6rem">
					{time.minutes < 10 ? '0' + time.minutes : time.minutes}
				</Time>
				<Span>Minutes</Span>
			</CountDownTime>
			<CountDownTime>
				<Time fontSize="6rem">
					{time.seconds < 10 ? '0' + time.seconds : time.seconds}
				</Time>
				<Span>Seconds</Span>
			</CountDownTime>
		</CountDownBox>
	);
}

export default Count;
