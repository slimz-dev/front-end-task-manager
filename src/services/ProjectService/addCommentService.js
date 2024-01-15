import { socket } from '~/socket';
import request from '~/utils/request';

export const addNewComment = async (taskId, data, departmentId) => {
	const { createBy } = data;
	try {
		const result = await request.post(`/comments/${taskId}`, data);
		socket.emit('update_comment', taskId, createBy, departmentId);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
