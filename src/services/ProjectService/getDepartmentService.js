import request from '~/utils/request';

export const getDepartmentTask = async (department) => {
	try {
		const result = await request.get(`/tasks/department/${department}`);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
