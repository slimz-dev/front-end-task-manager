import request from '~/utils/request';

export const delUserDepartment = async (id, departmentId) => {
	try {
		const data = {
			department: departmentId,
		};
		const result = await request.patch(`users/${id}/remove`, data);
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
