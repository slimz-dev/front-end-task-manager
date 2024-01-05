import request from '~/utils/request';

export const getMyDepartment = async (department) => {
	try {
		const result = await request.get(`/users/department/${department}`);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
