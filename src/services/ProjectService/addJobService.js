import { socket } from '~/socket';
import request from '~/utils/request';

export const addNewJob = async (taskId, title, departmentId) => {
	try {
		const result = await request.post(`/tasks/${taskId}/job`, {
			title: title,
		});
		socket.emit('update_job', taskId, departmentId);
		socket.emit('change_job', departmentId);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
