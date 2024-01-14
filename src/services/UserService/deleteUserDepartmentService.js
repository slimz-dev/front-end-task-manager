import { socket } from '~/socket';
import request from '~/utils/request';

export const delUserDepartment = async (id, departmentId) => {
	try {
		const data = {
			department: departmentId,
		};
		const result = await request.patch(`users/${id}/remove`, data);
		socket.emit('update_my_department', departmentId);
		if (result.status === 200) {
			return {
				statusCode: result.status,
				data: result.data.data,
			};
		}
	} catch (error) {
		return error;
	}
};
