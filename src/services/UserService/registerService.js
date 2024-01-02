import request from '~/utils/request';
import { socket } from '~/socket';

export const userRegistration = async (data) => {
	const res = await request.post('users/register', data);
	socket.emit('register', res.data);
	return res.data;
};
