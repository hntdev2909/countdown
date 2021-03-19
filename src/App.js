import { useState, useEffect } from 'react';
import { GlobalStyle } from './globalStyled';
import {
	ContainerApp,
	Main,
	Text,
	Title,
	TimeChoice,
	TimeChoiceList,
	TimeChoiceItem,
	CountDownBox,
	CountDownTime,
	TimeChoiceInput,
	Time,
	Copyright,
	TimeDiv,
	Span,
	BlurLayout,
	SlideDiv,
	SlideText,
} from './AppStyled';
import { DatePicker, Space, Select, Spin } from 'antd';
import FestivalDay from './festivalDay.json';
import _ from 'lodash';
import moment from 'moment';

const calculateTimeLeft = (picktime) => {
	const timeSelected = picktime || '2022-02-01 00:00:00';

	const difference = +new Date(timeSelected) - +new Date();
	if (difference > 0) {
		const timeLeft = {
			days: Math.floor(difference / (1000 * 24 * 60 * 60)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / (1000 * 60)) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
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

const { Option } = Select;

function App() {
	const { RangePicker } = DatePicker;
	const [date, setDate] = useState('');
	const [timeChoice, setTimeChoice] = useState('');
	const [dateChoice, setDateChoice] = useState('');
	const [time, setTime] = useState(calculateTimeLeft());
	const [listFestival, setListFestival] = useState([]);
	const [displayBlur, setDisplayBlur] = useState(false);
	const [option, setOption] = useState('');

	const handleChangeDate = (dayChoice) => {
		setDate(null);
		setOption(dayChoice);
		setTimeChoice(dayChoice);
	};

	const onChange = (value, dateString) => {
		setDateChoice(dateString);
		setTimeChoice(dateString);
		setOption(null);
		setDate(value);
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(calculateTimeLeft(timeChoice));
		}, 1000);

		return () => clearTimeout(timer);
	}, [timeChoice]);

	useEffect(() => {
		FestivalDay.map((item) => {
			const difference = +new Date(`2021-${item.time} 00:00:00`) - +new Date();
			if (difference < 0) {
				listFestival.push({
					time: `2022-${item.time} 00:00:00`,
					name: item.name,
				});
			} else {
				listFestival.push({
					time: `2021-${item.time} 00:00:00`,
					name: item.name,
				});
			}
		});
	}, []);

	const onBlur = () => {
		console.log('blur');
	};

	const onFocus = () => {
		console.log('focus');
	};

	const onSearch = (val) => {
		console.log('search:', val);
	};

	const disabledDate = (current) => {
		let customDate = '2021-03-19';
		return current && current < moment(customDate, 'YYYY-MM-DD');
		// return current && current.valueOf() < Date.now();
	};

	return (
		<ContainerApp>
			<GlobalStyle />
			<Main imgUrl="https://images.unsplash.com/photo-1538435740860-67bd8f4e8eb8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80">
				<TimeChoice>
					<Title marginBottom="25px">
						<Text fontSize="3.4rem" fontWeight="600" textAlign="center">
							COUNTDOWN TEMPLATE
						</Text>
					</Title>
					<TimeDiv>
						<Space style={{ width: 300 }} direction="vertical" size={15}>
							<DatePicker
								style={{ width: 300 }}
								showTime
								onChange={onChange}
								disabledDate={disabledDate}
								value={date}
							/>
						</Space>

						<Select
							showSearch
							style={{ width: 500 }}
							placeholder="Select a day"
							optionFilterProp="children"
							onChange={handleChangeDate}
							value={option}
							onFocus={onFocus}
							onBlur={onBlur}
							onSearch={onSearch}
							filterOption={(input, option) =>
								option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
							}
						>
							{_.map(listFestival, (item, index) => {
								return (
									<Option key={index} value={item.time}>
										{item.name}
									</Option>
								);
							})}
						</Select>
					</TimeDiv>
				</TimeChoice>
				<CountDownBox>
					<CountDownTime>
						<Time fontSize="6rem">
							{time.days < 10 ? '0' + time.days : time.days}
						</Time>
						<Span>Ngày</Span>
					</CountDownTime>
					<CountDownTime>
						<Time fontSize="6rem">
							{time.hours < 10 ? '0' + time.hours : time.hours}
						</Time>
						<Span>Giờ</Span>
					</CountDownTime>
					<CountDownTime>
						<Time fontSize="6rem">
							{time.minutes < 10 ? '0' + time.minutes : time.minutes}
						</Time>
						<Span>Phút</Span>
					</CountDownTime>
					<CountDownTime>
						<Time fontSize="6rem">
							{time.seconds < 10 ? '0' + time.seconds : time.seconds}
						</Time>
						<Span>Giây</Span>
					</CountDownTime>
				</CountDownBox>
				<Copyright>{/* Copyright by Thinh */}</Copyright>
			</Main>
			<BlurLayout>
				<Spin size="large" />
			</BlurLayout>
			{/* <SlideDiv>
				<SlideText>Tết Dương Lịch</SlideText>
			</SlideDiv> */}
		</ContainerApp>
	);
}

export default App;
