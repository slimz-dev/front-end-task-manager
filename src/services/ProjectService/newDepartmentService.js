import { socket } from '~/socket';
import request from '~/utils/request';

export const postNewTask = async (data, departmentId) => {
	try {
		const result = await request.post('/tasks/new', data);
		socket.emit('change_job', departmentId);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
