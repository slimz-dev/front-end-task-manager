import request from '~/utils/request';

export const getDepartment = async (department) => {
	try {
		const result = await request.get(`/departments/${department}`);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
