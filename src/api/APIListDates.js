import axios from 'axios';

export async function callAPI() {
	return await axios.get('https://server-intern-idra.herokuapp.com/countdown');
}
