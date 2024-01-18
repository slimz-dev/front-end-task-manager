import request from '~/utils/request';

export const getMyDepartmentTask = async (myDepartmentId) => {
	try {
		const result = await request.get(`/tasks/department/my/${myDepartmentId}`);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
