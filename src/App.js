import React, { useEffect } from 'react';
import Homepage from './containers/Homepage';
import { Images } from './themes';
import { useDispatch } from 'react-redux';
import { loadListDay, loadImages } from './redux';
import { callAPI } from './api/APIListDates';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(loadListDay(ListDay));
		dispatch(loadImages(Images));

		callAPI()
			.then((res) => dispatch(loadListDay(res.data)))
			.catch((err) => console.log(err));
	}, []);

	return <Homepage />;
}

export default App;
