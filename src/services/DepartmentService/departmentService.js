import request from '~/utils/request';

export const getTotalDepartments = async () => {
	try {
		const result = await request.get('/departments');
		return {
			statusCode: result.status,
			data: result.data.data,
			meta: result.data.meta,
		};
	} catch (error) {
		return error;
	}
};
