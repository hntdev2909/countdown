import { useEffect } from 'react';
import { TimeDiv, TimeChoice } from './DateTimePicker.styles';
import { TimePicker, DatePicker, Space, Select } from 'antd';
import _ from 'lodash';
import {
	selectTime,
	selectList,
	selectDate,
	setDateAndTime,
	resetTimeUp,
} from '../../redux';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

function DateTimePicker() {
	const dateTime = useSelector((state) => state.dateTime);

	const dispatch = useDispatch();

	const onChange = (value, dateString) => {
		dispatch(selectDate(value));
	};

	const handleChangeTime = (value) => {
		dispatch(selectTime(value));
	};

	const handleChangeDate = (dayChoice) => {
		console.log(dayChoice);
		dispatch(selectList(dayChoice));
	};

	const disabledDate = (current) => {
		return current && current.valueOf() < moment().startOf('day');
	};

	useEffect(() => {
		if (dateTime.date && dateTime.time) {
			const afterNow =
				dateTime.date.format('L') + ' ' + dateTime.time.format('HH:mm:ss');
			const beforeNow = moment().add(15, 's');
			if (moment().format('L HH:mm:ss') < afterNow) {
				dispatch(setDateAndTime(afterNow));
			} else {
				dispatch(setDateAndTime(beforeNow.format('L HH:mm:ss')));
			}
		}
	}, [dateTime.time, dateTime.date]);

	useEffect(() => {
		dispatch(resetTimeUp());
	}, [dateTime]);

	return (
		<TimeChoice>
			<TimeDiv>
				<Space style={{ width: 280 }} direction="vertical" size={15}>
					<DatePicker
						style={{ width: 280 }}
						size="large"
						onChange={onChange}
						disabledDate={disabledDate}
						value={dateTime.date}
					/>
				</Space>
				<TimePicker
					size="large"
					onChange={handleChangeTime}
					value={dateTime.time}
				/>
				<Select
					size="large"
					showSearch
					style={{ width: 450 }}
					placeholder="Select a day"
					onChange={handleChangeDate}
					value={dateTime.listPicked.content}
				>
					{_.map(dateTime.listDay, (item, index) => {
						return (
							<Option key={index} value={`${item.time}+${item.content}`}>
								{item.content}
							</Option>
						);
					})}
				</Select>
			</TimeDiv>
		</TimeChoice>
	);
}

export default DateTimePicker;
