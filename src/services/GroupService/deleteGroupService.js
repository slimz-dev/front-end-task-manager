import request from '~/utils/request';
import { socket } from '~/socket';
export const deleteGroup = async (group) => {
	try {
		const result = await request.delete(`/groups/${group}`);
		socket.emit('new_group');
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
