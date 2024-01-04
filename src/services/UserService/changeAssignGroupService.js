import request from '~/utils/request';
import { socket } from '~/socket';
export const changeAssign = async (user, data) => {
	try {
		const result = await request.patch(`/users/assign/${user}`, data);
		socket.emit('update_user_group');
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
