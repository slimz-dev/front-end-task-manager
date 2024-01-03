import request from '~/utils/request';
import { socket } from '~/socket';
export const deleteMultipleGroup = async (groups) => {
	try {
		console.log(groups);
		const result = await request.delete('/groups', { data: groups });
		socket.emit('new_group');
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
