import request from '~/utils/request';
import { socket } from '~/socket';
export const changeAssign = async (user, data) => {
	const { department } = data;
	try {
		const result = await request.patch(`/users/assign/${user}`, data);
		socket.emit('update_user_group');
		socket.emit('update_my_department', department);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
