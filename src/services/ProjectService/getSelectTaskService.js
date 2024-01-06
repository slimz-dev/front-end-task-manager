import request from '~/utils/request';

export const getSelectTask = async (department, taskId) => {
	try {
		const result = await request.get(`/tasks/department/${department}/${taskId}`);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
