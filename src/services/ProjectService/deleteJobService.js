import { socket } from '~/socket';
import request from '~/utils/request';

export const deleteJob = async (jobId, taskId, departmentId) => {
	try {
		const result = await request.patch(`/tasks/${taskId}/job`, {
			_id: jobId,
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
