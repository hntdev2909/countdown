import React, { useEffect } from 'react';
import Homepage from './containers/Homepage';
import ListDay from './festivalDay.json';
import { Images } from './themes';
import { useDispatch } from 'react-redux';
import { loadListDay, loadImages } from './redux';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadListDay(ListDay));
		dispatch(loadImages(Images));
	}, []);

	return <Homepage />;
}

export default App;
