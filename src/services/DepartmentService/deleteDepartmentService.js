import request from '~/utils/request';
import { socket } from '~/socket';
export const deleteDepartment = async (department) => {
	try {
		const result = await request.delete(`/departments/${department}`);
		socket.emit('new_department');
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
