import { socket } from '~/socket';
import request from '~/utils/request';

export const postNewDepartment = async (data) => {
	try {
		const result = await request.post('/departments/new', data);
		socket.emit('new_department');
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
