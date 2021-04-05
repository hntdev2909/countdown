import axios from 'axios';

export async function callAPI() {
	return await axios.get('http://localhost:5000/countdown');
}
