import { socket } from '~/socket';
import request from '~/utils/request';

export const postNewGroup = async (data) => {
	try {
		const result = await request.post('/groups/new', data);
		socket.emit('new_group');
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
