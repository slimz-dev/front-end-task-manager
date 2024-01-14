import request from '~/utils/request';
import { socket } from '~/socket';

export const userRegistration = async (token, data) => {
	const res = await request.post(`users/register/${token}`, data);
	socket.emit('register', res.data);
	return res.data;
};
