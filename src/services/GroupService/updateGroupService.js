import request from '~/utils/request';
import { socket } from '~/socket';
export const updateGroup = async (group, data) => {
	try {
		const result = await request.patch(`/groups/${group}`, data);
		socket.emit('new_group');
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
