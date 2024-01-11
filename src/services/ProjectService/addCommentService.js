import { socket } from '~/socket';
import request from '~/utils/request';

export const addNewComment = async (taskId, data) => {
	console.log(data);
	try {
		const result = await request.post(`/comments/${taskId}`, data);
		socket.emit('update_comment', taskId);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
