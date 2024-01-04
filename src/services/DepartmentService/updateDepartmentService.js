import request from '~/utils/request';
import { socket } from '~/socket';
export const updateDepartment = async (department, data) => {
	try {
		const result = await request.patch(`/departments/${department}`, data);
		socket.emit('new_department');
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
