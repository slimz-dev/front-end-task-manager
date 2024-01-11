import { socket } from '~/socket';
import request from '~/utils/request';

export const deleteTask = async (taskId, departmentId) => {
	try {
		const result = await request.delete(`/tasks/${taskId}`);
		socket.emit('change_job', departmentId);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
