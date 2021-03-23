import { useState, useEffect } from 'react';
import FestivalDay from './festivalDay.json';
import { TimeDiv, TimeChoice } from './DateTimePicker.styles';
import { TimePicker, DatePicker, Space, Select } from 'antd';
import _ from 'lodash';
import moment from 'moment';

const { Option } = Select;

function DateTimePicker({ callback, resetCalendar, newDate }) {
	const [date, setDate] = useState('');
	const [option, setOption] = useState('');
	const [listFestival, setListFestival] = useState([]);
	const [selectedDay, setSelectedDate] = useState('');
	const [time, setTime] = useState('');

	const onChange = (value, dateString) => {
		setOption(null);
		setDate(value);
	};

	const handleChangeTime = (value) => {
		setTime(value);
	};

	const handleChangeDate = (dayChoice) => {
		setDate(null);
		setOption(dayChoice);
		setSelectedDate(dayChoice);
		setTime(null);
	};

	const disabledDate = (current) => {
		return current && current.valueOf() < moment().startOf('day');
	};

	useEffect(() => {
		if (date && time) {
			const afterNow = date.format('L') + ' ' + time.format('HH:mm:ss');
			const beforeNow = moment().add(15, 's');
			if (moment().format('L HH:mm:ss') < afterNow) {
				setSelectedDate(afterNow);
			} else {
				setSelectedDate(beforeNow.format('L HH:mm:ss'));
			}
		}
	}, [date, time]);

	useEffect(() => {
		const data = [...listFestival];
		FestivalDay.forEach((item) => {
			const difference = +new Date(`2021-${item.time} 00:00:00`) - +new Date();
			if (difference < 0) {
				data.push({
					time: `2022-${item.time} 00:00:00`,
					name: item.name,
				});
			} else {
				data.push({
					time: `2021-${item.time} 00:00:00`,
					name: item.name,
				});
			}
			// return data;
		});
		setListFestival(data);
	}, []);

	useEffect(() => {
		if (_.includes(selectedDay, '+')) {
			const data = _.split(selectedDay, '+');
			callback({ time: data[0], name: data[1] });
		}
		callback({ time: selectedDay });
	}, [selectedDay]);

	useEffect(() => {
		if (!resetCalendar && newDate !== selectedDay) {
			setDate(null);
			setTime(null);
		}
	}, [resetCalendar, newDate]);

	return (
		<TimeChoice>
			<TimeDiv>
				<Space style={{ width: 280 }} direction="vertical" size={15}>
					<DatePicker
						style={{ width: 280 }}
						size="large"
						onChange={onChange}
						disabledDate={disabledDate}
						value={date}
					/>
				</Space>
				<TimePicker size="large" onChange={handleChangeTime} value={time} />
				<Select
					size="large"
					showSearch
					style={{ width: 450 }}
					placeholder="Select a day"
					onChange={handleChangeDate}
					value={option}
				>
					{_.map(listFestival, (item, index) => {
						return (
							<Option key={index} value={`${item.time}+${item.name}`}>
								{item.name}
							</Option>
						);
					})}
				</Select>
			</TimeDiv>
		</TimeChoice>
	);
}

export default DateTimePicker;
